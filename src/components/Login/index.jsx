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

function Login() {
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

      <Box sx={styles.gapX} component="form" noValidate>
       <Box>
        <Typography sx={styles.formLabel} color="text.secondary" gutterBottom>
         Email or mobile number
        </Typography>

        <TextField
         id="email"
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
         variant="outlined"
         sx={styles.btnAndInputWidth}
         size="small"
        />
       </Box>

       <Box sx={styles.gapX}>
        <Button id="loginBtn" variant="contained" sx={styles.btnAndInputWidth}>
         Login
        </Button>
       </Box>

       <Divider sx={styles.gapX}>{`OR`}</Divider>

       {/* TODO: Add google icon */}
       <Box sx={styles.gapX}>
        <Button
         id="loginWithGoogleBtn"
         variant="outlined"
         sx={styles.btnAndInputWidth}
         color="inherit"
        >
         Continue with Google
        </Button>
       </Box>
      </Box>
     </CardContent>
    </Card>

    <Divider sx={styles.gapX}>{`Don't have an account?`}</Divider>

    <Box sx={styles.gapX}>
     <Button id="signupBtn" variant="contained" sx={styles.btnAndInputWidth}>
      Create your account
     </Button>
    </Box>
   </Box>
  </>
 );
}

export default Login;
