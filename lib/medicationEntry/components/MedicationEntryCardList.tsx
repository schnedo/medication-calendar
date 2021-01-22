import { PointerEventHandler, ReactElement, useState } from "react";
import { MedicationEntryCard } from "./index";
import {
  Box,
  CircularProgress,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useMedicationEntries } from "./MedicationEntriesProvider";
import { MedicationEntry } from "../model";
import AddMedicationEntryDialog from "./AddMedicationEntryDialog";

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

interface MenuPosition {
  clientX: number;
  clientY: number;
}

export default function MedicationEntryCardList(): ReactElement {
  const { entries } = useMedicationEntries();

  const [selection, setSelection] = useState<MedicationEntry | undefined>(
    undefined,
  );
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const handleClick: PointerEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setMenuPosition({ clientX: event.clientX, clientY: event.clientY });
  };
  const handleMenuClose = () => setMenuPosition(null);

  const handleDialogClose = () => setSelection(undefined);

  const { container } = useStyle();
  return entries === null ? (
    <CircularProgress />
  ) : (
    <>
      <Box className={container}>
        {entries.map((entry) => (
          <MedicationEntryCard
            key={entry.id}
            medicationEntry={entry}
            onClick={handleClick}
          />
        ))}
      </Box>
      <Menu
        open={!!menuPosition}
        keepMounted
        onClose={handleMenuClose}
        anchorReference={"anchorPosition"}
        anchorPosition={
          menuPosition
            ? { top: menuPosition.clientY, left: menuPosition.clientX }
            : undefined
        }
      >
        <MenuItem>Bearbeiten</MenuItem>
        <MenuItem>Löschen</MenuItem>
      </Menu>
      <AddMedicationEntryDialog
        open={!!selection}
        medicationEntry={selection}
        onClose={handleDialogClose}
      />
    </>
  );
}
