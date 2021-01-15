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
          const withId = await repository.save(entry);
          setValue((old) => ({
            ...old,
            entries: [...(old.entries ?? []), withId],
          }));
        },
        deleteEntry: async (entry) => {
          await repository.remove(entry);
          setValue((old) => ({
            ...old,
            entries: old.entries?.filter(({ id }) => id !== entry.id) ?? [],
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
