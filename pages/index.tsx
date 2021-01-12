import { ReactElement } from "react";
import { MedicationEntryCardList } from "../lib/medicationEntry";
import MedicationEntriesProvider from "../lib/medicationEntry/components/MedicationEntriesProvider";

export default function Home(): ReactElement {
  return (
    <>
      <main>
        <MedicationEntriesProvider>
          <MedicationEntryCardList />
        </MedicationEntriesProvider>
      </main>
    </>
  );
}
