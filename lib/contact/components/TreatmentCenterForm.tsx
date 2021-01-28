import { ChangeEventHandler, ReactElement, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { TreatmentCenter } from "../model";

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

export interface TreatmentCenterFormProps {
  treatmentCenter: TreatmentCenter;
  readOnly?: boolean;
  onSubmit?: (value: TreatmentCenter) => void;
  onAbort?: () => void;
}

export default function TreatmentCenterForm({
  treatmentCenter,
  readOnly,
  onSubmit,
  onAbort,
}: TreatmentCenterFormProps): ReactElement {
  const [state, setState] = useState<TreatmentCenter>(treatmentCenter);
  const setField = (
    field: keyof Omit<TreatmentCenter, "birthdate">,
  ): ChangeEventHandler<HTMLInputElement> => ({ target: { value } }) =>
    setState((old) => ({ ...old, [field]: value }));

  useEffect(() => setState(treatmentCenter), [treatmentCenter]);

  const handleAbort = () => {
    setState(treatmentCenter);
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
