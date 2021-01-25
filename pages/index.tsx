import { ReactElement, useState } from "react";
import {
  MedicationEntry,
  MedicationEntryCardList,
} from "../lib/medicationEntry";
import { useMedicationEntries } from "../lib/medicationEntry/components/MedicationEntriesProvider";
import MedicationEntryDialog from "../lib/medicationEntry/components/MedicationEntryDialog";
import { Fab, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { MedicationEntryCardListSelection } from "../lib/medicationEntry/components/MedicationEntryCardList";

const useStyles = makeStyles((theme) => ({
  actionButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Home(): ReactElement {
  const { entries, deleteEntry, saveEntry } = useMedicationEntries();

  const [
    selection,
    setSelection,
  ] = useState<MedicationEntryCardListSelection | null>(null);
  const handleSelect = (newSelection: MedicationEntryCardListSelection) =>
    setSelection(newSelection);

  const [dialogOpen, setDialogOpen] = useState(false);
  const showDialog = () => setDialogOpen(true);
  const closeMenu = () => setSelection(null);
  const closeDialog = () => {
    setDialogOpen(false);
    closeMenu();
  };
  const handleSubmit = async (entry: MedicationEntry) => {
    await saveEntry(entry);
    closeDialog();
  };

  const handleDelete = async () => {
    if (selection) {
      await deleteEntry(selection.medicationEntry);
      closeMenu();
    }
  };
  const handleEdit = async () => {
    showDialog();
  };

  const { actionButton } = useStyles();
  return (
    <>
      <main>
        <MedicationEntryCardList
          medicationEntries={entries}
          onSelect={handleSelect}
        />
        <MedicationEntryDialog
          open={dialogOpen}
          medicationEntry={selection?.medicationEntry}
          onClose={closeDialog}
          onAbort={closeDialog}
          onSubmit={handleSubmit}
        />
        <Menu
          open={!!selection}
          keepMounted
          onClose={closeMenu}
          anchorReference={"anchorPosition"}
          anchorPosition={
            selection
              ? {
                  top: selection.pointerPosition.clientY,
                  left: selection.pointerPosition.clientX,
                }
              : undefined
          }
        >
          <MenuItem onClick={handleEdit}>Bearbeiten</MenuItem>
          <MenuItem onClick={handleDelete}>Löschen</MenuItem>
        </Menu>
        <Fab
          color="primary"
          aria-label="addMedicationEntry"
          onClick={showDialog}
          className={actionButton}
        >
          <Add />
        </Fab>
      </main>
    </>
  );
}
