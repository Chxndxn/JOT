import {
 Box,
 Button,
 Card,
 CardContent,
 Divider,
 TextField,
 Typography,
} from '@mui/material';
import styles from './index.style';

function Signup() {
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

     <Box sx={styles.gapX} component="form" noValidate>
      <Box>
       <Typography sx={styles.formLabel} color="text.secondary" gutterBottom>
        Your name
       </Typography>

       <TextField
        id="name"
        placeholder="First and last name"
        variant="outlined"
        sx={styles.btnAndInputWidth}
        size="small"
       />
      </Box>

      <Box sx={styles.gapX}>
       <Typography sx={styles.formLabel} color="text.secondary" gutterBottom>
        Email or mobile number
       </Typography>

       <TextField
        id="email"
        placeholder="Email or mobile number"
        variant="outlined"
        sx={styles.btnAndInputWidth}
        size="small"
       />
      </Box>

      <Box sx={styles.gapX}>
       <Typography sx={styles.formLabel} color="text.secondary" gutterBottom>
        Password
       </Typography>

       <TextField
        id="password"
        placeholder="At least 8 characters"
        variant="outlined"
        sx={styles.btnAndInputWidth}
        size="small"
       />
      </Box>

      <Box sx={styles.gapX}>
       <Button id="signupBtn" variant="contained" sx={styles.btnAndInputWidth}>
        Create account
       </Button>
      </Box>

      <Divider sx={styles.gapX}>{`OR`}</Divider>

      {/* TODO: Add google icon */}
      <Box sx={styles.gapX}>
       <Button
        id="signupWithGoogleBtn"
        variant="outlined"
        sx={styles.btnAndInputWidth}
        color="inherit"
       >
        Continue with Google
       </Button>
      </Box>
     </Box>
     <Box sx={styles.loginBox}>
      <Typography sx={styles.formLabel} color="text.secondary" gutterBottom>
       Already have an account?
      </Typography>

      <Typography
       id="loginBtn"
       sx={styles.loginLink}
       color="text.secondary"
       gutterBottom
       component="a"
      >
       Login
      </Typography>
     </Box>
    </CardContent>
   </Card>
  </Box>
 );
}

export default Signup;
