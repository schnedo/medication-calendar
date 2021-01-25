import { PointerEventHandler, ReactElement } from "react";
import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
  container: {
    width: "100%",
    textAlign: "justify",
  },
}));

export interface MedicationCardProps {
  medication: Medication;
  onClick?: PointerEventHandler<HTMLButtonElement>;
}

export default function MedicationCard({
  medication: {
    medicament: { name, batchNumber },
    dose,
  },
  onClick,
}: MedicationCardProps): ReactElement {
  const { row, content, trailer, container } = useStyles();
  return (
    <ButtonBase
      onClick={onClick}
      disableRipple={!onClick}
      className={container}
    >
      <Card className={container}>
        <CardContent className={row}>
          <Box className={content}>
            <Typography>{name}</Typography>
            <Typography color="textSecondary">
              {formatBatchNumber(batchNumber)}
            </Typography>
          </Box>
          <Typography className={trailer}>{formatDose(dose)}</Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
