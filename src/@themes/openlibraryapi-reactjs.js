import { createMuiTheme } from "@material-ui/core/styles";

const fontFamily = "'Open Sans', sans-serif";
const headlinesColor = "#444F60";

export default createMuiTheme({
  typography: {
    fontFamily: fontFamily,
    color: "#444F60",
    h1: {
      marginBottom: 10,
      fontSize: 40,
    },
    h2: {
      marginBottom: 10,
      fontSize: 30,
    },
    h3: {
      fontSize: 25,
    },
    h4: {
      fontSize: 20,
    },
    subtitle1: {
      marginBottom: 20,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "#4a4a4a",
        },
      },
    },
    MuiPaper: {
      root: {
        color: "#4a4a4a",
      },
    },
    MuiTypography: {
      h1: {
        fontWeight: 600,
        color: headlinesColor,
      },
      h2: {
        fontWeight: 500,
        color: headlinesColor,
      },
    },
  },
  commons: {},
});
