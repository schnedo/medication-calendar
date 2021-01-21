import {
  ChangeEventHandler,
  Dispatch,
  FocusEventHandler,
  PointerEventHandler,
  ReactElement,
  SetStateAction,
  useEffect,
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

export interface AddMedicationDialogProps {
  open: boolean;
  onClose?: ModalProps["onClose"];
  onSubmit?: (medication: Medication) => Promise<void>;
  onAbort?: () => void;
}

export default function AddMedicationDialog({
  open,
  onClose,
  onSubmit,
  onAbort,
}: AddMedicationDialogProps): ReactElement {
  const [doseAmount, setDoseAmount] = useState("");
  const [doseValid, setDoseValid] = useState(true);
  const handleDoseChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setDoseAmount(value);
  const handleDoseBlur: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => checkValidity(value, setDoseValid);
  const handleDoseFocus: FocusEventHandler<HTMLInputElement> = () =>
    setDoseValid(true);

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setName(value);
  const handleNameBlur: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => checkValidity(value, setNameValid);
  const handleNameFocus: FocusEventHandler<HTMLInputElement> = () =>
    setNameValid(true);

  const [batchNumber, setBatchNumber] = useState("");
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
    if (!open) {
      const resetState = () => {
        setDoseAmount("");
        setDoseValid(true);
        setName("");
        setNameValid(true);
        setBatchNumber("");
        setBatchNumberValid(true);
      };
      resetState();
    }
  }, [open]);

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
            id: v4(),
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
