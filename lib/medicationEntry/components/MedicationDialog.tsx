import {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  PointerEventHandler,
  ReactElement,
  SetStateAction,
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
  FormGroup,
  TextField,
} from "@material-ui/core";
import { ModalProps } from "@material-ui/core/Modal";
import { Medication } from "../model";
import { v4 } from "uuid";

function checkValidity<T>(
  value: T,
  validitySetter: Dispatch<SetStateAction<boolean>>,
): boolean {
  const valid = !!value;
  validitySetter(valid);
  return valid;
}

export interface MedicationDialogProps {
  open: boolean;
  medication?: Medication;
  onClose?: ModalProps["onClose"];
  onSubmit?: (medication: Medication) => Promise<void>;
  onAbort?: () => void;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function MedicationDialog({
  open,
  medication,
  onClose,
  onSubmit,
  onAbort,
}: MedicationDialogProps): ReactElement {
  const idRef = useRef(medication?.id ?? v4());

  const [doseAmount, setDoseAmount] = useState(
    medication?.dose.amount.toString() ?? "",
  );
  const [doseValid, setDoseValid] = useState(true);
  const handleDoseChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setDoseAmount(value);
  const handleDoseBlur: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => checkValidity(value, setDoseValid);
  const handleDoseFocus: FocusEventHandler<HTMLInputElement> = () =>
    setDoseValid(true);

  const [name, setName] = useState(medication?.medicament.name ?? "");
  const [nameValid, setNameValid] = useState(true);
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setName(value);
  const handleNameBlur: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => checkValidity(value, setNameValid);
  const handleNameFocus: FocusEventHandler<HTMLInputElement> = () =>
    setNameValid(true);

  const [batchNumber, setBatchNumber] = useState(
    medication?.medicament.batchNumber.number.toString() ?? "",
  );
  const [batchNumberValid, setBatchNumberValid] = useState(true);
  const handleBatchNumberChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setBatchNumber(value);
  const handleBatchNumberBlur: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => checkValidity(value, setBatchNumberValid);
  const handleBatchNumberFocus: FocusEventHandler<HTMLInputElement> = () =>
    setBatchNumberValid(true);

  useEffect(() => {
    if (open) {
      const resetState = () => {
        setDoseAmount(medication?.dose.amount.toString() ?? "");
        setDoseValid(true);
        setName(medication?.medicament.name ?? "");
        setNameValid(true);
        setBatchNumber(
          medication?.medicament.batchNumber.number.toString() ?? "",
        );
        setBatchNumberValid(true);
      };
      resetState();
    }
  }, [open, medication]);

  const handleClose: typeof onClose = (event, reason) => {
    onClose && onClose(event, reason);
  };
  const handleAbort = () => {
    onAbort && onAbort();
  };

  const handleSubmit:
    | PointerEventHandler<HTMLButtonElement>
    | undefined = onSubmit
    ? async () => {
        const doseValidity = checkValidity(doseAmount, setDoseValid);
        const nameValidity = checkValidity(name, setNameValid);
        const batchNumberValidity = checkValidity(
          batchNumber,
          setBatchNumberValid,
        );
        if (doseValidity && nameValidity && batchNumberValidity) {
          await onSubmit({
            id: idRef.current,
            medicament: {
              name,
              batchNumber: {
                number: parseInt(batchNumber),
              },
            },
            dose: {
              amount: parseInt(doseAmount),
            },
          });
        }
      }
    : undefined;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Neue Medikation</DialogTitle>
      <DialogContent>
        <FormGroup>
          <TextField
            id={"doseInput"}
            label={"Dosis"}
            type={"number"}
            value={doseAmount}
            onChange={handleDoseChange}
            onBlur={handleDoseBlur}
            onFocus={handleDoseFocus}
            error={!doseValid}
            helperText={!doseValid && "Bitte Dosis eingeben"}
          />
          <TextField
            id={"nameInput"}
            label={"Name"}
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            onFocus={handleNameFocus}
            error={!nameValid}
            helperText={!nameValid && "Bitte Name eingeben"}
          />
          <TextField
            id={"batchNumberInput"}
            label={"Chargenbezeichnung"}
            type={"number"}
            value={batchNumber}
            onChange={handleBatchNumberChange}
            onBlur={handleBatchNumberBlur}
            onFocus={handleBatchNumberFocus}
            error={!batchNumberValid}
            helperText={
              !batchNumberValid && "Bitte Chargenbezeichnung eingeben"
            }
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button color={"primary"} onClick={handleAbort}>
          Abbrechen
        </Button>
        <Button color={"primary"} onClick={handleSubmit}>
          Speichern
        </Button>
      </DialogActions>
    </Dialog>
  );
}
