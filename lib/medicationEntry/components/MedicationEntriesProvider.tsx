import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { MedicationEntry } from "../model";
import { getAll, remove, save } from "../model/repository";

export interface MedicationEntriesContext {
  entries: MedicationEntry[] | null;
  saveEntry: (entry: MedicationEntry) => Promise<void>;
  deleteEntry: (entry: MedicationEntry) => Promise<void>;
}

const defaultContext: MedicationEntriesContext = {
  entries: null,
  saveEntry: save,
  deleteEntry: remove,
};

const medicationEntriesContext = createContext(defaultContext);
medicationEntriesContext.displayName = "MedicationEntriesContext";

export const useMedicationEntries = (): MedicationEntriesContext =>
  useContext(medicationEntriesContext);

export interface MedicationEntriesProviderProps {
  children?: ReactNode;
}

export default function MedicationEntriesProvider({
  children,
}: MedicationEntriesProviderProps): ReactElement {
  const [value, setValue] = useState<MedicationEntriesContext>(defaultContext);
  useEffect(() => {
    getAll().then((entries) => {
      setValue((old) => ({ ...old, entries }));
    });
  }, []);
  return (
    <medicationEntriesContext.Provider value={value}>
      {children}
    </medicationEntriesContext.Provider>
  );
}
