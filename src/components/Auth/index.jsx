import Login from './Login';
import Signup from './Signup';
import * as yup from 'yup';
import { PASSWORD_REGEX } from '../../constants/regexPatterns';
import { EMAIL, NAME, PASSWORD } from '../../constants/validationMessages';
import { useState } from 'react';
import { Box } from '@mui/material';
import styles from './index.style';

// TODO: Hide Header and Footer
const Auth = () => {
 const [loginFlag, setLoginFlag] = useState(true);

 const authValidationSchema = yup.object({
  name: yup
   .string('Enter your name.')
   .min(8, 'Your name should be at least 8 characters long.')
   .max(30, NAME.MAX_LENGTH)
   .required(NAME.REQ),
  email: yup
   .string('Enter your email address')
   .email(EMAIL.INVALID)
   .required(EMAIL.REQ),
  password: yup
   .string('Enter your password')
   .min(8, 'Password should be at least 8 characters long.')
   .matches(!PASSWORD_REGEX, PASSWORD.INVALID)
   .required(PASSWORD.REQ),
 });

 const handleLoginFlag = value => {
  setLoginFlag(value);
 };

 return (
  <Box sx={styles.root}>
   <Box sx={styles.rootContainer}>
    {loginFlag ? (
     <Login
      loginFlag={loginFlag}
      handleLoginFlag={handleLoginFlag}
      validationSchema={authValidationSchema}
     />
    ) : (
     <Signup
      loginFlag={loginFlag}
      handleLoginFlag={handleLoginFlag}
      validationSchema={authValidationSchema}
     />
    )}
   </Box>
  </Box>
 );
};

export default Auth;
