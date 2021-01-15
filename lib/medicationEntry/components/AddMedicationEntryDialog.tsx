import { MouseEventHandler, ReactElement, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { ModalProps } from "@material-ui/core/Modal";
import { Duration, Medication, MedicationEntry } from "../model";
import DurationInput from "./DurationInput";
import MedicationsInput from "./MedicationsInput";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    "&>*": {
      marginBottom: theme.spacing(2),
      "&:lastChild": {
        marginBottom: theme.spacing(0),
      },
    },
  },
}));

export interface AddMedicationEntryDialogProps {
  open: boolean;
  onClose?: ModalProps["onClose"];
  onSubmit?: (entry: MedicationEntry) => Promise<void>;
  onAbort?: () => void;
}

export default function AddMedicationEntryDialog({
  onClose,
  onSubmit,
  onAbort,
  open,
}: AddMedicationEntryDialogProps): ReactElement {
  const { dialogContent } = useStyles();

  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState({
    minutes: 0,
    hours: 0,
  } as Duration);
  const [bodyMass, setBodyMass] = useState("60");
  const [comments, setComments] = useState("");
  const [medications, setMedications] = useState<Medication[]>([]);

  const handleSubmit: MouseEventHandler | undefined = onSubmit
    ? async () => {
        await onSubmit({
          id: "",
          date,
          duration,
          bodyMass: {
            amount: parseInt(bodyMass),
          },
          comments,
          medications,
        });
      }
    : undefined;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Neuer Eintrag</DialogTitle>
      <DialogContent className={dialogContent}>
        <TextField
          id={"bodyMassInput"}
          label={"Körpergewicht"}
          type={"number"}
          value={bodyMass}
          onChange={(event) => setBodyMass(event.target.value)}
        />
        <DatePicker
          id={"dateInput"}
          label={"Datum"}
          value={date}
          onChange={(value) => setDate(value ?? date)}
        />
        <DurationInput value={duration} onChange={setDuration} />
        <TextField
          id={"commentsInput"}
          label={"Kommentare"}
          multiline
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />
        <MedicationsInput value={medications} onChange={setMedications} />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onAbort}>
          Abbrechen
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Speichern
        </Button>
      </DialogActions>
    </Dialog>
  );
}
