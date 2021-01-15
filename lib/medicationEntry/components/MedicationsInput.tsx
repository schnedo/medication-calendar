import { PointerEventHandler, ReactElement, useState } from "react";
import {
  Box,
  DialogContentText,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Add, MoreHoriz } from "@material-ui/icons";
import AddMedicationDialog from "./AddMedicationDialog";
import { Medication } from "../model";
import { MedicationCard } from "./index";

const useStyles = makeStyles(() => ({
  medicationsAddContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export interface MedicationsInputProps {
  value: Medication[];
  onChange?: (medications: Medication[]) => void;
}

export default function MedicationsInput({
  value,
  onChange,
}: MedicationsInputProps): ReactElement {
  const [open, setOpen] = useState(false);
  const handleClick: PointerEventHandler<HTMLButtonElement> = () =>
    setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (medication: Medication) => {
    onChange && onChange([...value, medication]);
    setOpen(false);
  };

  const { medicationsAddContainer } = useStyles();
  return (
    <Box>
      <DialogContentText>Einträge</DialogContentText>
      {value.map((medication) => (
        <MedicationCard medication={medication} key={medication.id} />
      ))}
      <Box className={medicationsAddContainer}>
        <MoreHoriz color={"disabled"} />
        <IconButton onClick={handleClick}>
          <Add />
        </IconButton>
      </Box>
      <AddMedicationDialog
        open={open}
        onClose={handleClose}
        onAbort={handleClose}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
