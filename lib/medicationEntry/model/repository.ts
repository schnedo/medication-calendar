import MedicationEntry from "./medicationEntry";
import localforage from "localforage";

const medicationEntryKey = "medicationEntries";

let loadedEntries: MedicationEntry[] = [];

export async function getAll(): Promise<MedicationEntry[]> {
  const storedEntries =
    (await localforage.getItem<MedicationEntry[]>(medicationEntryKey)) ?? [];
  loadedEntries = storedEntries;
  return storedEntries;
}

export async function save(medicationEntry: MedicationEntry): Promise<void> {
  const toBeStored = [medicationEntry, ...loadedEntries];
  await localforage.setItem(medicationEntryKey, toBeStored);
  loadedEntries = toBeStored;
}

export async function remove(medicationEntry: MedicationEntry): Promise<void> {
  const index = loadedEntries.findIndex(({ id }) => medicationEntry.id === id);
  if (index === -1) {
    return;
  }
  const remainingEntries = [
    ...loadedEntries.slice(0, index),
    ...loadedEntries.slice(index + 1),
  ];
  await localforage.setItem(medicationEntryKey, remainingEntries);
}
