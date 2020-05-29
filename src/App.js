import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LeftDrawer from "@components/LeftDrawer";
import Home from "@routes/Home";
import Books from "@routes/Books";

import { AppProvider } from "@context";

import { useStyles } from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <AppProvider>
      <div className={classes.root}>
        <Router>
          <LeftDrawer />
          <main className={classes.content}>
            <Switch>
              <Route path="/books">
                <Books />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </AppProvider>
  );
};

export default App;
