import { ReactElement } from "react";
import { MedicationEntryCard } from "./index";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { MedicationEntry } from "../model";

const useStyle = makeStyles((theme) => ({
  container: {
    "&>*": {
      marginBottom: theme.spacing(1),
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
}));

export interface MedicationEntryCardListSelection {
  medicationEntry: MedicationEntry;
  pointerPosition: {
    clientX: number;
    clientY: number;
  };
}

export interface MedicationEntryCardListProps {
  medicationEntries: MedicationEntry[] | null;
  onSelect: (
    medicationEntryCardListSelection: MedicationEntryCardListSelection,
  ) => void;
}

export default function MedicationEntryCardList({
  medicationEntries,
  onSelect,
}: MedicationEntryCardListProps): ReactElement {
  const { container } = useStyle();
  return medicationEntries === null ? (
    <CircularProgress />
  ) : (
    <Box className={container}>
      {medicationEntries.map((entry) => (
        <MedicationEntryCard
          key={entry.id}
          medicationEntry={entry}
          onClick={({ clientX, clientY }) => {
            onSelect({
              medicationEntry: entry,
              pointerPosition: { clientX, clientY },
            });
          }}
        />
      ))}
    </Box>
  );
}
