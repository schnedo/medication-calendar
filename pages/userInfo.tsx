import { ReactElement, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Edit, Menu } from "@material-ui/icons";
import { User, UserForm, useUser } from "../lib/contact";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: "1",
  },
}));

export default function UserInfo(): ReactElement {
  const [readOnly, setReadOnly] = useState(true);
  const handleEditClick = () => setReadOnly(false);
  const handleAbort = () => setReadOnly(true);

  const { user, saveUser } = useUser();
  const handleSubmit = async (newUser: User) => {
    await saveUser(newUser);
    setReadOnly(true);
  };

  const { menuButton, title } = useStyles();
  return (
    <Box>
      <AppBar position={"sticky"}>
        <Toolbar>
          <IconButton className={menuButton} edge={"start"} color={"inherit"}>
            <Menu />
          </IconButton>
          <Typography className={title} variant={"h6"}>
            Benutzer Informationen
          </Typography>
          {readOnly ? (
            <IconButton
              edge={"end"}
              color={"inherit"}
              onClick={handleEditClick}
            >
              <Edit />
            </IconButton>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
      <Container component={"main"}>
        <UserForm
          user={user}
          readOnly={readOnly}
          onAbort={handleAbort}
          onSubmit={handleSubmit}
        />
      </Container>
    </Box>
  );
}
