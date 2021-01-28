import { ReactElement } from "react";
import generatePdf from "../lib/pdf/generatePdf";
import { useMedicationEntries } from "../lib/medicationEntry/components/MedicationEntriesProvider";

export default function Pdf(): ReactElement {
  const { entries } = useMedicationEntries();
  return (
    <button onClick={() => entries && generatePdf(entries).open()}>pdf</button>
  );
}
