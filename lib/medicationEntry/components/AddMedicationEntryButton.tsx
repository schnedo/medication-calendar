import { ReactElement, useState } from "react";
import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import AddMedicationEntryDialog from "./AddMedicationEntryDialog";
import { useMedicationEntries } from "./MedicationEntriesProvider";
import { MedicationEntry } from "../model";

const useStyles = makeStyles((theme) => ({
  actionButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function AddMedicationEntryButton(): ReactElement {
  const { actionButton } = useStyles();

  const [open, setOpen] = useState(false);
  const showDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const { saveEntry } = useMedicationEntries();
  const onSubmit = async (entry: MedicationEntry) => {
    await saveEntry(entry);
    closeDialog();
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={showDialog}
        className={actionButton}
      >
        <Add />
      </Fab>
      <AddMedicationEntryDialog
        open={open}
        onSubmit={onSubmit}
        onAbort={closeDialog}
        onClose={closeDialog}
      />
    </>
  );
}
