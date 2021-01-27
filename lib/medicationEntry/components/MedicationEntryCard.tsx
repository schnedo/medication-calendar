import { PointerEventHandler, ReactElement } from "react";
import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MedicationCard } from "../components";
import { formatDuration, MedicationEntry } from "../model";
import { format } from "date-fns";
import { formatBodyMass } from "../../contact";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  header: {
    marginRight: theme.spacing(1),
  },
  trailer: {
    marginLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
  },
  medicationsList: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&>*": {
      marginBottom: theme.spacing(1),
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
}));

export interface MedicationEntryCardProps {
  medicationEntry: MedicationEntry;
  onClick?: PointerEventHandler<HTMLButtonElement>;
}

export default function MedicationEntryCard({
  medicationEntry: { date, medications, comments, duration, bodyMass },
  onClick,
}: MedicationEntryCardProps): ReactElement {
  const { container, medicationsList, row, header, trailer } = useStyles();
  return (
    <ButtonBase
      onClick={onClick}
      className={container}
      disableRipple={!onClick}
    >
      <Card className={container}>
        <CardContent className={row}>
          <Typography className={header}>
            {format(date, "EEEEEE dd")}
          </Typography>
          <Box className={medicationsList}>
            {medications.map((medication) => (
              <MedicationCard medication={medication} key={medication.id} />
            ))}
            <Typography align={"left"}>{comments}</Typography>
          </Box>
          <Box className={trailer}>
            <Typography>{formatDuration(duration)}</Typography>
            <Typography>{formatBodyMass(bodyMass)}</Typography>
          </Box>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
