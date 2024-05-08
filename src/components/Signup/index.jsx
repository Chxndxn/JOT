/* Imports */
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import styles from "./index.style";
import InputField from "../common/InputField";
import { EMAIL, NAME, PASSWORD } from "../../constants/validationMessages";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regexPatterns";
import { useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../routes/paths";

function Signup() {
  /* Data */
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errMessages, setErrMessages] = useState({
    name: null,
    email: null,
    password: null,
  });

  /* Methods */
  const handleChange = (key, value) => {
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submitSignup = (event) => {
    event.preventDefault();
    if (validateForm()) {
      /* TODO: Insert new user account logic */
      console.log(user);
    }
  };

  const validateForm = () => {
    setErrMessages({
      name: null,
      email: null,
      password: null,
    });
    validateName();
    validateEmail();
    validatePassword();
    if (
      errMessages.name != null ||
      errMessages.email != null ||
      errMessages.password != null
    ) {
      return true;
    }
    return false;
  };

  const validateName = () => {
    if (!user.name) {
      setErrMessages((prevState) => ({
        ...prevState,
        name: NAME.REQ,
      }));
    }
    if (user.name.length > 30) {
      setErrMessages((prevState) => ({
        ...prevState,
        name: NAME.MAX_LENGTH,
      }));
    }
  };

  const validateEmail = () => {
    if (!user.email) {
      setErrMessages((prevState) => ({
        ...prevState,
        email: EMAIL.REQ,
      }));
    }
    if (user.email && !user.email.match(EMAIL_REGEX)) {
      setErrMessages((prevState) => ({
        ...prevState,
        email: EMAIL.INVALID,
      }));
    }
  };

  const validatePassword = () => {
    if (!user.password) {
      setErrMessages((prevState) => ({
        ...prevState,
        password: PASSWORD.REQ,
      }));
    }
    if (user.password && !user.password.match(PASSWORD_REGEX)) {
      setErrMessages((prevState) => ({
        ...prevState,
        password: PASSWORD.INVALID,
      }));
    }
  };

  return (
    // TODO: Add logo on top of the card
    <Box sx={styles.rootContainer}>
      <Card variant="outlined" sx={styles.card}>
        <CardContent>
          <Typography
            id="cardHeading"
            sx={styles.cardHeading}
            color="text.primary"
            gutterBottom
          >
            Create your account
          </Typography>

          <Box component="form" noValidate onSubmit={(e) => submitSignup(e)}>
            <InputField
              label="Your name"
              placeholder="First and last name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              {...(errMessages.name != null
                ? { errorFlag: true, errMessage: errMessages.name }
                : { errorFlag: false })}
            />

            <InputField
              label="Email address"
              placeholder="Email address"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              {...(errMessages.email != null
                ? { errorFlag: true, errMessage: errMessages.email }
                : { errorFlag: false })}
            />

            <InputField
              label="Password"
              placeholder="At least 8 characters"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              {...(errMessages.password != null
                ? { errorFlag: true, errMessage: errMessages.password }
                : { errorFlag: false })}
            />

            <Box sx={styles.gapY}>
              <Button
                id="signupBtn"
                variant="contained"
                sx={styles.btnWidth}
                type="submit"
              >
                Create account
              </Button>
            </Box>
          </Box>

          <Divider sx={styles.gapY}>{`OR`}</Divider>

          {/* TODO: 
                1. Add google icon
                2. Implement google api login */}
          <Box sx={styles.gapY}>
            <Button
              id="signupWithGoogleBtn"
              variant="outlined"
              sx={styles.btnWidth}
              color="inherit"
            >
              Continue with Google
            </Button>
          </Box>

          <Box sx={styles.loginBox}>
            <Typography
              sx={styles.formLabel}
              color="text.secondary"
              gutterBottom
            >
              Already have an account?
            </Typography>

            <Link to={pages.login.absolutePath}>
              <Typography
                id="loginBtn"
                sx={styles.loginLink}
                color="text.secondary"
                gutterBottom
                component="a"
              >
                Login
              </Typography>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Signup;
