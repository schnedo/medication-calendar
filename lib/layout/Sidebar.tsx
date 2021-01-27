import { ReactElement, ReactEventHandler } from "react";
import {
  SwipeableDrawer,
  Link as MuiLink,
  List,
  makeStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Link from "next/link";
import { title } from "../../pages/userInfo";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "&>*": { minWidth: theme.spacing(20) },
  },
}));

export interface SidebarProps {
  open: boolean;
  onOpen: ReactEventHandler;
  onClose: ReactEventHandler;
}

export default function Sidebar({
  open,
  onOpen,
  onClose,
}: SidebarProps): ReactElement {
  const { drawer } = useStyles();
  return (
    <SwipeableDrawer
      className={drawer}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <List>
        <ListItem button>
          <ListItemText>
            <Link href={"/userInfo"} passHref>
              <MuiLink color={"inherit"} underline={"none"}>
                {title}
              </MuiLink>
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
