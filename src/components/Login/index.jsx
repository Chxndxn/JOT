import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "./index.style";
import InputField from "../common/InputField";
import { Link } from "react-router-dom";
import { EMAIL_REGEX } from "../../constants/regexPatterns";
import { EMAIL, PASSWORD } from "../../constants/validationMessages";

function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errMessages, setErrMessages] = useState({
    email: null,
    password: null,
  });

  const handleChange = (key, value) => {
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const validateUser = () => {
    setErrMessages({
      name: null,
      email: null,
      password: null,
    });
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
    /* TODO: Implement password mismatch logic */
  };

  const submitLogin = (event) => {
    event.preventDefault();
    if (validateUser()) {
      /* TODO: Login user account logic */
      console.log(user);
    }
  };

  return (
    // TODO: Add logo on top of the card
    <>
      <Box sx={styles.rootContainer}>
        <Card variant="outlined" sx={styles.card}>
          <CardContent>
            <Typography
              id="cardHeading"
              sx={styles.cardHeading}
              color="text.primary"
              gutterBottom
            >
              Login
            </Typography>

            <Box component="form" noValidate onSubmit={submitLogin}>
              <InputField
                label="Email Address"
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
                  id="loginBtn"
                  variant="contained"
                  sx={styles.btnWidth}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            </Box>

            <Divider sx={styles.gapY}>{`OR`}</Divider>

            {/* TODO: 
                1. Add google icon
                2. Implement google api login */}
            <Box sx={styles.gapY}>
              <Button
                id="loginWithGoogleBtn"
                variant="outlined"
                sx={styles.btnWidth}
                color="inherit"
              >
                Continue with Google
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Divider sx={styles.gapY}>{`Don't have an account?`}</Divider>

        <Box sx={styles.gapY}>
          <Link to="/signup">
            <Button id="signupBtn" variant="contained" sx={styles.btnWidth}>
              Create your account
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Login;
