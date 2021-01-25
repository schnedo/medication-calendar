import {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { Medication, MedicationEntry } from "../model";
import DurationInput from "./DurationInput";
import MedicationsInput from "./MedicationsInput";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    "&>*": {
      marginBottom: theme.spacing(2),
      "&:last-child": {
        marginBottom: theme.spacing(0),
      },
    },
  },
}));

const defaultDate = () => new Date();
const defaultDuration = {
  minutes: 0,
  hours: 0,
};
const defaultBodyMass = "60";
const defaultComments = "";
const defaultMedications: Medication[] = [];

export interface MedicationEntryDialogProps {
  open: boolean;
  medicationEntry?: MedicationEntry;
  onClose?: ModalProps["onClose"];
  onSubmit?: (entry: MedicationEntry) => Promise<void>;
  onAbort?: () => void;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function MedicationEntryDialog({
  open,
  medicationEntry,
  onClose,
  onSubmit,
  onAbort,
}: MedicationEntryDialogProps): ReactElement {
  const idRef = useRef(medicationEntry?.id ?? "");
  const [date, setDate] = useState(medicationEntry?.date ?? defaultDate());
  const [duration, setDuration] = useState(
    medicationEntry?.duration ?? defaultDuration,
  );
  const [bodyMass, setBodyMass] = useState(
    medicationEntry?.bodyMass.amount.toString() ?? defaultBodyMass,
  );
  const [comments, setComments] = useState(
    medicationEntry?.comments ?? defaultComments,
  );
  const [medications, setMedications] = useState<Medication[]>(
    medicationEntry?.medications ?? defaultMedications,
  );

  useEffect(() => {
    if (open) {
      setDate(medicationEntry?.date ?? defaultDate());
      setDuration(medicationEntry?.duration ?? defaultDuration);
      setBodyMass(
        medicationEntry?.bodyMass.amount.toString() ?? defaultBodyMass,
      );
      setComments(medicationEntry?.comments ?? defaultComments);
      setMedications(medicationEntry?.medications ?? defaultMedications);
      idRef.current = medicationEntry?.id ?? "";
    }
  }, [medicationEntry, open]);

  const handleSubmit: MouseEventHandler | undefined = onSubmit
    ? async () => {
        await onSubmit({
          id: idRef.current,
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

  const { dialogContent } = useStyles();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {medicationEntry ? "Eintrag bearbeiten" : "Neuer Eintrag"}
      </DialogTitle>
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
