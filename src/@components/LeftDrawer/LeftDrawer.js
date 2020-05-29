import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import {
  Link as A,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./styles";

const LeftDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <Link to="/" className={classes.listItemLink}>
            <ListItemText primary={"Home"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/books" className={classes.listItemLink}>
            <ListItemText primary={"Books"} />
          </Link>
        </ListItem>
      </List>
      <div className={classes.authorBlock}>
        <Typography className={classes.title}>
          Author: <A href="https://github.com/flashz1">@github.com:flashz1</A>
        </Typography>
      </div>
    </Drawer>
  );
};

export default LeftDrawer;
