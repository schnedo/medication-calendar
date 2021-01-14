import MedicationEntry from "./medicationEntry";
import localforage from "localforage";

const medicationEntryKey = "medicationEntries";

export async function getAll(): Promise<MedicationEntry[]> {
  return (
    (await localforage.getItem<MedicationEntry[]>(medicationEntryKey)) ?? []
  );
}

export async function save(medicationEntry: MedicationEntry): Promise<void> {
  const storedEntries = await getAll();
  const toBeStored = [medicationEntry, ...storedEntries];
  await localforage.setItem(medicationEntryKey, toBeStored);
}

export async function remove(medicationEntry: MedicationEntry): Promise<void> {
  const storedEntries = await getAll();
  const index = storedEntries.findIndex(({ id }) => medicationEntry.id === id);
  if (index === -1) {
    return;
  }
  const remainingEntries = [
    ...storedEntries.slice(0, index),
    ...storedEntries.slice(index + 1),
  ];
  await localforage.setItem(medicationEntryKey, remainingEntries);
}
