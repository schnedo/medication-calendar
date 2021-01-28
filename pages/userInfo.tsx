import { ReactElement, useState } from "react";
import { Container } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { User, UserForm, useUser } from "../lib/contact";
import { AppBarUser } from "../lib/layout";

export const title = "Benutzer Informationen";

export default function UserInfo({ AppBar }: AppBarUser): ReactElement {
  const [readOnly, setReadOnly] = useState(true);
  const handleEditClick = () => setReadOnly(false);
  const handleAbort = () => setReadOnly(true);

  const { user, saveUser } = useUser();
  const handleSubmit = async (newUser: User) => {
    await saveUser(newUser);
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
        <UserForm
          user={user}
          readOnly={readOnly}
          onAbort={handleAbort}
          onSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
