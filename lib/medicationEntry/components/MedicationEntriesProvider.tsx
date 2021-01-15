import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { MedicationEntry } from "../model";
import { Repository } from "../../storage";

const repository = new Repository<MedicationEntry>({
  storeName: "medicationEntries",
});

export interface MedicationEntriesContext {
  entries: MedicationEntry[] | null;
  saveEntry: (entry: MedicationEntry) => Promise<void>;
  deleteEntry: (entry: MedicationEntry) => Promise<void>;
}

const defaultContext: MedicationEntriesContext = {
  entries: null,
  saveEntry: (entry) => repository.save(entry),
  deleteEntry: (entry) => repository.remove(entry),
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
    repository.getAll().then((entries) => {
      setValue((old) => ({ ...old, entries }));
    });
  }, []);
  return (
    <medicationEntriesContext.Provider value={value}>
      {children}
    </medicationEntriesContext.Provider>
  );
}
