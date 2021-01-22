import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { MedicationEntry } from "../model";
import { Entity, Repository } from "../../storage";

const repository = new Repository<MedicationEntry>({
  storeName: "medicationEntries",
});

export interface MedicationEntriesContext {
  entries: (MedicationEntry & Entity)[] | null;
  saveEntry: (entry: MedicationEntry) => Promise<void>;
  deleteEntry: (entry: MedicationEntry) => Promise<void>;
}

const notInitialized = () =>
  Promise.reject(new Error("MedicationEntriesProvider not initialized yet"));

const defaultContext: MedicationEntriesContext = {
  entries: null,
  saveEntry: notInitialized,
  deleteEntry: notInitialized,
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
      setValue({
        entries,
        saveEntry: async (entry) => {
          await repository.save(entry);
          const newEntries = await repository.getAll();
          setValue((old) => ({
            ...old,
            entries: newEntries,
          }));
        },
        deleteEntry: async (entry) => {
          await repository.remove(entry);
          const newEntries = await repository.getAll();
          setValue((old) => ({
            ...old,
            entries: newEntries,
          }));
        },
      });
    });
  }, []);
  return (
    <medicationEntriesContext.Provider value={value}>
      {children}
    </medicationEntriesContext.Provider>
  );
}
