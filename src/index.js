import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import muiTheme from "@themes/openlibraryapi-reactjs";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("openlibraryapi-reactjs-app")
);
