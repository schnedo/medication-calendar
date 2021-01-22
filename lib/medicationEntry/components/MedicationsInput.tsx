import { PointerEventHandler, ReactElement, useState } from "react";
import {
  Box,
  DialogContentText,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import MedicationDialog from "./MedicationDialog";
import { Medication } from "../model";
import { MedicationCard } from "./index";

const useStyles = makeStyles(() => ({
  medicationsAddContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

interface MedicationsListSelection {
  medication: Medication;
  pointerPosition: {
    clientX: number;
    clientY: number;
  };
}

export interface MedicationsInputProps {
  value: Medication[];
  onChange?: (medications: Medication[]) => void;
}

export default function MedicationsInput({
  value,
  onChange,
}: MedicationsInputProps): ReactElement {
  const [selection, setSelection] = useState<MedicationsListSelection | null>(
    null,
  );
  const closeMenu = () => setSelection(null);

  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => {
    setOpen(false);
    closeMenu();
  };

  const handleAdd: PointerEventHandler<HTMLButtonElement> = () => {
    closeMenu();
    openDialog();
  };
  const handleDialogClose = () => closeDialog();
  const handleSubmit = async (medication: Medication) => {
    if (onChange) {
      const index = value.findIndex(({ id }) => id === medication.id);
      const newMedications =
        index === -1
          ? [...value, medication]
          : [...value.slice(0, index), medication, ...value.slice(index + 1)];
      onChange(newMedications);
    }
    closeDialog();
  };

  const handleEdit = () => openDialog();
  const handleDelete = () => {
    onChange &&
      selection &&
      onChange(
        value.filter((medication) => medication != selection.medication),
      );
    closeMenu();
  };

  const { medicationsAddContainer } = useStyles();
  return (
    <Box>
      <DialogContentText>Einträge</DialogContentText>
      {value.map((medication) => (
        <MedicationCard
          medication={medication}
          key={medication.id}
          onClick={({ clientX, clientY }) =>
            setSelection({ medication, pointerPosition: { clientX, clientY } })
          }
        />
      ))}
      <Box className={medicationsAddContainer}>
        <div />
        <IconButton onClick={handleAdd}>
          <Add />
        </IconButton>
      </Box>
      <Menu
        open={!!selection}
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
      <MedicationDialog
        open={open}
        medication={selection?.medication}
        onClose={handleDialogClose}
        onAbort={handleDialogClose}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
