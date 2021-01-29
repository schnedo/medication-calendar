import { ReactElement, useState } from "react";
import {
  MedicationEntry,
  MedicationEntryCardList,
} from "../lib/medicationEntry";
import { useMedicationEntries } from "../lib/medicationEntry/components/MedicationEntriesProvider";
import MedicationEntryDialog from "../lib/medicationEntry/components/MedicationEntryDialog";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormGroup,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Add, Print } from "@material-ui/icons";
import { MedicationEntryCardListSelection } from "../lib/medicationEntry/components/MedicationEntryCardList";
import { AppBarUser, RightButtonConfig } from "../lib/layout";
import createPdf from "../lib/pdf/createPdf";
import { isBefore, startOfMonth } from "date-fns";
import { DatePicker } from "@material-ui/pickers";

const isBetween = (startDate: Date, endDate: Date, checkDate: Date): boolean =>
  isBefore(checkDate, endDate) && isBefore(startDate, checkDate);

const getSliceInTime = (
  entries: MedicationEntry[],
  startDate: Date,
  endDate: Date,
): MedicationEntry[] => {
  return entries
    .filter(({ date }) => isBetween(startDate, endDate, date))
    .sort(
      ({ date: dateA }, { date: dateB }) => dateB.valueOf() - dateA.valueOf(),
    );
};

const useStyles = makeStyles((theme) => ({
  actionButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  printForm: {
    "&>*": {
      marginTop: theme.spacing(1),
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
}));

export default function Home({ AppBar }: AppBarUser): ReactElement {
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

  const [printDialogOpen, setPrintDialogOpen] = useState(false);
  const [printTimeRange, setPrintTimeRange] = useState({
    start: startOfMonth(new Date()),
    end: new Date(),
  });
  const printButtonConfig: RightButtonConfig | undefined = entries
    ? {
        icon: Print,
        ariaLabel: "print",
        onClick() {
          setPrintDialogOpen(true);
        },
      }
    : undefined;

  const { actionButton, printForm } = useStyles();
  return (
    <>
      <AppBar title={"Medikamenten Tagebuch"} rightButton={printButtonConfig} />
      <Dialog open={printDialogOpen} onClose={() => setPrintDialogOpen(false)}>
        <DialogTitle>Drucken</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte wählen Sie den Zeitraum aus.
          </DialogContentText>
          <FormGroup className={printForm}>
            <DatePicker
              label={"Von"}
              value={printTimeRange.start}
              onChange={(date) =>
                date && setPrintTimeRange((old) => ({ ...old, start: date }))
              }
              inputVariant={"outlined"}
            />
            <DatePicker
              label={"Bis"}
              value={printTimeRange.end}
              onChange={(date) =>
                date && setPrintTimeRange((old) => ({ ...old, end: date }))
              }
              inputVariant={"outlined"}
            />
          </FormGroup>
          <DialogActions>
            <Button id={"printAbort"} onClick={() => setPrintDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button
              id={"printConfirm"}
              onClick={() =>
                entries &&
                createPdf(
                  getSliceInTime(
                    entries,
                    printTimeRange.start,
                    printTimeRange.end,
                  ),
                ).open()
              }
            >
              Drucken
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Container component={"main"}>
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
      </Container>
    </>
  );
}
