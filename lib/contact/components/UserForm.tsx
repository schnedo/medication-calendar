import { ChangeEventHandler, ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { User } from "../model";

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

interface UserFormState {
  fullName: string;
  birthdate: Date | null;
  address: string;
  phoneNumber: string;
  diagnosis: string;
  bodyMass: string;
}

const transform = ({
  fullName,
  birthdate,
  address,
  phoneNumber,
  diagnosis,
  bodyMass,
}: UserFormState): User => {
  return {
    fullName,
    birthdate,
    address,
    phoneNumber,
    diagnosis,
    bodyMass: bodyMass ? { amount: parseInt(bodyMass) } : null,
  };
};

const defaultState = (user?: User): UserFormState => ({
  address: user?.address ?? "",
  birthdate: user?.birthdate ?? null,
  bodyMass: user?.bodyMass?.amount.toString() ?? "",
  diagnosis: user?.diagnosis ?? "",
  fullName: user?.fullName ?? "",
  phoneNumber: user?.phoneNumber ?? "",
});

export interface UserFormProps {
  user?: User;
  readOnly?: boolean;
  onSubmit?: (value: User) => void;
  onAbort?: () => void;
}

export default function UserForm({
  user,
  readOnly,
  onSubmit,
  onAbort,
}: UserFormProps): ReactElement {
  const [state, setState] = useState<UserFormState>(() => defaultState(user));
  const setField = (
    field: keyof Omit<UserFormState, "birthdate">,
  ): ChangeEventHandler<HTMLInputElement> => ({ target: { value } }) =>
    setState((old) => ({ ...old, [field]: value }));
  const setDate = (birthDate: Date | null) =>
    birthDate && setState((old) => ({ ...old, birthdate: birthDate }));

  useEffect(() => setState(defaultState(user)), [user]);

  const handleAbort = () => {
    setState(defaultState(user));
    onAbort && onAbort();
  };
  const handleSubmit = onSubmit ? () => onSubmit(transform(state)) : undefined;

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
      <DatePicker
        value={state.birthdate}
        onChange={setDate}
        id={"birthDatePicker"}
        label={"Geburtstag"}
        inputVariant={"outlined"}
        readOnly={readOnly}
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
      <TextField
        value={state.diagnosis}
        onChange={setField("diagnosis")}
        id={"diagnosisField"}
        label={"Diagnose"}
        variant={"outlined"}
        inputProps={readOnly ? { readOnly: true, disabled: true } : undefined}
      />
      <TextField
        value={state.bodyMass}
        onChange={setField("bodyMass")}
        id={"bodyMassField"}
        label={"Körpergewicht"}
        variant={"outlined"}
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
