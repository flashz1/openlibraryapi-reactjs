import React from "react";
import { Card, CardMedia, CardContent, Link } from "@material-ui/core";

import { useStyles } from "./styles";

const Book = ({ data: { thumbnail_url, info_url } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={thumbnail_url}
        title="Paella dish"
      />
      <CardContent>
        <Link href={info_url} target="_blank">
          Go to website.
        </Link>
      </CardContent>
    </Card>
  );
};

export default Book;
