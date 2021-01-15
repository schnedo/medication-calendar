import { ReactElement } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Duration } from "../model";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";

const range = (n: number): number[] => [...Array(n).keys()];

const createDurationMenuItem = (value: number) => (
  <MenuItem value={value} key={value}>
    {value}
  </MenuItem>
);

const useStyles = makeStyles((theme) => ({
  durationSelect: {
    display: "flex",
    "&>*": {
      marginRight: theme.spacing(1),
      "&:lastChild": {
        marginRight: theme.spacing(0),
      },
    },
  },
}));

interface NumberColumnProps {
  value: number;
  label: string;
  max: number;
  onChange: (value: number) => void;
}

function NumberColumn({
  value,
  label,
  max,
  onChange,
}: NumberColumnProps): ReactElement {
  const handleValueChange: SelectInputProps["onChange"] = (event) =>
    onChange(parseInt(event.target.value as string));

  const labelId = `${label}-label`;

  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        value={value.toString()}
        onChange={handleValueChange}
      >
        {range(max).map(createDurationMenuItem)}
      </Select>
    </FormControl>
  );
}

export interface DurationSelectProps {
  value: Duration;
  onChange: (duration: Duration) => void;
}

export default function DurationInput({
  value: { minutes, hours },
  onChange,
}: DurationSelectProps): ReactElement {
  const handleMinutesChange = (value: number) => {
    onChange({ minutes: value, hours });
  };
  const handleHoursChange = (value: number) => {
    onChange({ minutes, hours: value });
  };

  const { durationSelect } = useStyles();
  return (
    <Box className={durationSelect}>
      <NumberColumn
        label={"h"}
        value={hours ?? 0}
        max={23}
        onChange={handleHoursChange}
      />
      <NumberColumn
        value={minutes ?? 0}
        label={"min"}
        max={59}
        onChange={handleMinutesChange}
      />
    </Box>
  );
}
