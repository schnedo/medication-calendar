import { ReactElement } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { MedicationCard } from "../components";
import { MedicationEntry } from "../model";
import { format } from "date-fns";

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
  medicationEntry,
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
        <Typography className={header}>
          {format(medicationEntry.date, "EEEEEE dd")}
        </Typography>
        <div className={`${medicationsList} ${rowItem}`}>
          {medicationEntry.medications.map((medication, index) => (
            <MedicationCard
              medication={medication}
              className={medicationsListItem}
              key={index}
            />
          ))}
          <Typography>{medicationEntry.comments}</Typography>
        </div>
        <div className={trailer}>
          <Typography>{medicationEntry.duration.toString()}</Typography>
          <Typography>{medicationEntry.bodyMass.toString()}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
