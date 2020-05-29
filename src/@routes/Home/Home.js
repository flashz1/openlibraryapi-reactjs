import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField, Typography } from "@material-ui/core";

import { useAppContext } from "@context";

import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();
  const [formValue, setFormValue] = useState("");
  const [formValidation, setFormValidation] = useState({
    helperText: "Can't be empty.",
    error: false,
  });
  const history = useHistory();
  const { isLoading, fetchData } = useAppContext();

  const changeFormHandler = (event) => setFormValue(event.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formValue.length) {
      setFormValidation({
        ...formValidation,
        error: true,
      });

      return false;
    }

    await fetchData(formValue);
    history.push("/books");
  };

  return (
    <>
      <Typography variant="h3">Home</Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Enter a comma-separated list of library keys"
          name="libraryKeys"
          autoFocus
          onChange={changeFormHandler}
          helperText={formValidation.error && formValidation.helperText}
          error={formValidation.error}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={submitHandler}
          disabled={isLoading}
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default Home;
