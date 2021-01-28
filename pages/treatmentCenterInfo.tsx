import { ReactElement, useState } from "react";
import {
  TreatmentCenter,
  TreatmentCenterForm,
  useTreatmentCenter,
} from "../lib/contact";
import { Edit } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { AppBarUser } from "../lib/layout";

export const title = "Behandlungszentrum Informationen";

export default function TreatmentCenterInfo({
  AppBar,
}: AppBarUser): ReactElement {
  const [readOnly, setReadOnly] = useState(true);
  const handleEditClick = () => setReadOnly(false);
  const handleAbort = () => setReadOnly(true);

  const { treatmentCenter, saveTreatmentCenter } = useTreatmentCenter();
  const handleSubmit = async (newTreatmentCenter: TreatmentCenter) => {
    await saveTreatmentCenter(newTreatmentCenter);
    setReadOnly(true);
  };

  return (
    <>
      <AppBar
        withBackButton
        title={title}
        rightButton={
          readOnly
            ? {
                icon: Edit,
                ariaLabel: "edit",
                onClick: handleEditClick,
              }
            : undefined
        }
      />
      <Container component={"main"}>
        <TreatmentCenterForm
          treatmentCenter={treatmentCenter}
          readOnly={readOnly}
          onAbort={handleAbort}
          onSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
