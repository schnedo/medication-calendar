import MedicationEntry from "./medicationEntry";
import localforage from "localforage";

const medicationEntryKey = "medicationEntries";

export async function getAll(): Promise<MedicationEntry[] | null> {
  return localforage.getItem(medicationEntryKey);
}

export async function saveAll(
  medicationEntries: MedicationEntry[],
): Promise<MedicationEntry[]> {
  return localforage.setItem(medicationEntryKey, medicationEntries);
}
