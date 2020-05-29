import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#bd5d38",
  },
  toolbar: theme.mixins.toolbar,
  listItemLink: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    textDecoration: "none",
    color: "#ffffff",
  },
  authorBlock: {
    marginTop: "auto",
    padding: theme.spacing(3, 2),
    color: "#ffffff",

    "& a": {
      color: "#ffffff",
    },
  },
}));
