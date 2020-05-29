import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "36%",
    backgroundSize: "auto",
  },
}));
