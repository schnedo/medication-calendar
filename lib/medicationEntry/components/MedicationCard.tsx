import { ReactElement } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { formatBatchNumber, formatDose, Medication } from "../model";

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
  medication: {
    medicament: { name, batchNumber },
    dose,
  },
  className,
}: MedicationCardProps): ReactElement {
  const { row, content, trailer } = useStyles();
  return (
    <Card className={className}>
      <CardContent className={row}>
        <div className={content}>
          <Typography>{name}</Typography>
          <Typography color="textSecondary">
            {formatBatchNumber(batchNumber)}
          </Typography>
        </div>
        <Typography className={trailer}>{formatDose(dose)}</Typography>
      </CardContent>
    </Card>
  );
}
