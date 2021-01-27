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

export interface AppBarProps {
  title?: string;
  withBackButton?: boolean;
  RightButtonIcon?: SvgIconComponent;
  onRightButtonClick?: () => void;
}

export default function AppBar({
  title,
  withBackButton,
  RightButtonIcon,
  onRightButtonClick,
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
          >
            {withBackButton ? <ArrowBack /> : <Menu />}
          </IconButton>
          <Typography className={titleStyle} variant={"h6"}>
            {title}
          </Typography>
          <IconButton
            edge={"end"}
            color={"inherit"}
            onClick={onRightButtonClick}
          >
            {RightButtonIcon ? <RightButtonIcon /> : <></>}
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
