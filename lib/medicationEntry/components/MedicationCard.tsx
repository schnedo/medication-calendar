import { ReactElement } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Medication } from "../model";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    flex: "1",
  },
  trailer: {
    marginLeft: theme.spacing(1),
  },
}));

export interface MedicationCardProps {
  medication: Medication;
  className?: string;
}

export default function MedicationCard({
  medication,
  className,
}: MedicationCardProps): ReactElement {
  const { row, content, trailer } = useStyles();
  return (
    <Card className={className}>
      <CardContent className={row}>
        <div className={content}>
          <Typography>{medication.medicament.name}</Typography>
          <Typography color="textSecondary">
            {medication.medicament.batchNumber.toString()}
          </Typography>
        </div>
        <Typography className={trailer}>
          {medication.dose.toString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
