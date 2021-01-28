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
import { title as userInfoTitle } from "../../pages/userInfo";
import { title as doctorInfoTitle } from "../../pages/doctorInfo";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "&>*": { minWidth: theme.spacing(20) },
  },
}));

interface SidebarLinkProps {
  href: string | URL;
  text: string;
}
function SidebarLink({ href, text }: SidebarLinkProps) {
  return (
    <ListItem button>
      <ListItemText>
        <Link href={href} passHref>
          <MuiLink color={"inherit"} underline={"none"}>
            {text}
          </MuiLink>
        </Link>
      </ListItemText>
    </ListItem>
  );
}

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
        <SidebarLink href={"/userInfo"} text={userInfoTitle} />
        <SidebarLink href={"/doctorInfo"} text={doctorInfoTitle} />
      </List>
    </SwipeableDrawer>
  );
}
