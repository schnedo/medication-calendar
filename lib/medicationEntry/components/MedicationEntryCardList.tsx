import { ReactElement } from "react";
import { MedicationEntryCard } from "./index";
import { CircularProgress } from "@material-ui/core";
import { useMedicationEntries } from "./MedicationEntriesProvider";

export default function MedicationEntryCardList(): ReactElement {
  const { entries } = useMedicationEntries();
  return entries === null ? (
    <CircularProgress />
  ) : (
    <div>
      {entries.map((entry) => (
        <MedicationEntryCard key={entry.id} medicationEntry={entry} />
      ))}
    </div>
  );
}
