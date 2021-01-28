import { ReactElement, useState } from "react";
import {
  AppBar as MuiAppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ArrowBack, Menu, SvgIconComponent } from "@material-ui/icons";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  topLeftButtonStyle: {
    marginRight: theme.spacing(2),
  },
  titleStyle: {
    flex: "1",
  },
}));

export interface AppBarUser {
  AppBar: typeof AppBar;
}

export interface RightButtonConfig {
  icon: SvgIconComponent;
  ariaLabel: string;
  onClick?: () => void;
}

export interface AppBarProps {
  title?: string;
  withBackButton?: boolean;
  rightButton?: RightButtonConfig;
}

export default function AppBar({
  title,
  withBackButton,
  rightButton,
}: AppBarProps): ReactElement {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const { topLeftButtonStyle, titleStyle } = useStyles();
  return (
    <>
      <MuiAppBar position={"sticky"}>
        <Toolbar>
          <IconButton
            className={topLeftButtonStyle}
            edge={"start"}
            color={"inherit"}
            onClick={
              withBackButton
                ? () => router.back()
                : () => setSidebarOpen((old) => !old)
            }
            aria-label={withBackButton ? "go back" : "open menu"}
          >
            {withBackButton ? <ArrowBack /> : <Menu />}
          </IconButton>
          <Typography className={titleStyle} variant={"h6"}>
            {title}
          </Typography>
          <IconButton
            edge={"end"}
            color={"inherit"}
            onClick={rightButton?.onClick}
            aria-label={rightButton?.ariaLabel}
          >
            {rightButton ? <rightButton.icon /> : <></>}
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Sidebar
        open={sidebarOpen}
        onOpen={() => setSidebarOpen(true)}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
