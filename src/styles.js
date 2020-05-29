import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(0, 1),
    margin: 0,
  },
  content: {
    display: "flex",
    flexFlow: "column",
    flex: 1,
    padding: theme.spacing(2),
  },
}));
