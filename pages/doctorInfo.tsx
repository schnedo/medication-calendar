import { ReactElement, useState } from "react";
import { Doctor, DoctorForm, useDoctor } from "../lib/contact";
import { Edit } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { AppBarUser } from "../lib/layout";

export const title = "Doktor Informationen";

export default function DoctorInfo({ AppBar }: AppBarUser): ReactElement {
  const [readOnly, setReadOnly] = useState(true);
  const handleEditClick = () => setReadOnly(false);
  const handleAbort = () => setReadOnly(true);

  const { doctor, saveDoctor } = useDoctor();
  const handleSubmit = async (newDoctor: Doctor) => {
    await saveDoctor(newDoctor);
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
        <DoctorForm
          doctor={doctor}
          readOnly={readOnly}
          onAbort={handleAbort}
          onSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
