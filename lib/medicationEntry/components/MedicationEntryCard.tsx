import { ReactElement } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { MedicationCard } from "../components";
import { formatDuration, MedicationEntry } from "../model";
import { format } from "date-fns";
import { formatBodyMass } from "../../contact";

const useStyles = makeStyles((theme) => ({
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
  rowItem: {
    flex: "1",
  },
  medicationsList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  medicationsListItem: {
    flex: "1",
    marginBottom: theme.spacing(1),
    "&:lastChild": 0,
  },
}));

export interface MedicationEntryCardProps {
  medicationEntry: MedicationEntry;
}

export default function MedicationEntryCard({
  medicationEntry: { date, medications, comments, duration, bodyMass },
}: MedicationEntryCardProps): ReactElement {
  const {
    medicationsListItem,
    medicationsList,
    row,
    rowItem,
    header,
    trailer,
  } = useStyles();
  return (
    <Card>
      <CardContent className={row}>
        <Typography className={header}>{format(date, "EEEEEE dd")}</Typography>
        <div className={`${medicationsList} ${rowItem}`}>
          {medications.map((medication) => (
            <MedicationCard
              medication={medication}
              className={medicationsListItem}
              key={medication.id}
            />
          ))}
          <Typography>{comments}</Typography>
        </div>
        <div className={trailer}>
          <Typography>{formatDuration(duration)}</Typography>
          <Typography>{formatBodyMass(bodyMass)}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
