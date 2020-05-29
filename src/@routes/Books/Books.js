import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useAppContext } from "@context/index";
import Book from "@components/Book";
import { useStyles } from "./styles";

const Books = () => {
  const classes = useStyles();
  const { list } = useAppContext();

  if (Object.keys(list).length < 1) {
    return (
      <Typography variant="h3">
        No books. Go back{" "}
        <Link to="/" className={classes.listItemLink}>
          Home
        </Link>
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h3" className={classes.title}>
        Books:
      </Typography>
      {Object.keys(list).map((key) => (
        <Book key={key} data={list[key]} />
      ))}
    </>
  );
};

export default Books;
