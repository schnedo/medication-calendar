import { ChangeEventHandler, ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Doctor } from "../model";

const useStyles = makeStyles((theme) => ({
  container: {
    "&>*": {
      marginTop: theme.spacing(1),
    },
  },
  buttons: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
}));

export interface DoctorFormProps {
  doctor: Doctor;
  readOnly?: boolean;
  onSubmit?: (value: Doctor) => void;
  onAbort?: () => void;
}

export default function DoctorForm({
  doctor,
  readOnly,
  onSubmit,
  onAbort,
}: DoctorFormProps): ReactElement {
  const [state, setState] = useState<Doctor>(doctor);
  const setField = (
    field: keyof Omit<Doctor, "birthdate">,
  ): ChangeEventHandler<HTMLInputElement> => ({ target: { value } }) =>
    setState((old) => ({ ...old, [field]: value }));

  useEffect(() => setState(doctor), [doctor]);

  const handleAbort = () => {
    setState(doctor);
    onAbort && onAbort();
  };
  const handleSubmit = onSubmit ? () => onSubmit(state) : undefined;

  const { container, buttons } = useStyles();
  return (
    <FormGroup className={container}>
      <TextField
        value={state.fullName}
        onChange={setField("fullName")}
        id={"fullNameField"}
        label={"Name"}
        variant={"outlined"}
        inputProps={readOnly ? { readOnly: true, disabled: true } : undefined}
      />
      <TextField
        value={state.address}
        onChange={setField("address")}
        id={"addressField"}
        label={"Adresse"}
        variant={"outlined"}
        inputProps={readOnly ? { readOnly: true, disabled: true } : undefined}
      />
      <TextField
        value={state.phoneNumber}
        onChange={setField("phoneNumber")}
        id={"phoneNumberField"}
        label={"Telefonnummer"}
        variant={"outlined"}
        type={"tel"}
        inputProps={readOnly ? { readOnly: true, disabled: true } : undefined}
      />
      {readOnly ? (
        <></>
      ) : (
        <Box className={buttons}>
          <Button color={"primary"} onClick={handleAbort}>
            Abbrechen
          </Button>
          <Button color={"primary"} onClick={handleSubmit}>
            Speichern
          </Button>
        </Box>
      )}
    </FormGroup>
  );
}
