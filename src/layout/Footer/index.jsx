import {
 Box,
 List,
 ListItem,
 ListItemButton,
 ListItemText,
 Typography,
} from '@mui/material';
import styles from './index.style';

const navItems = ['About', 'Contact'];

function Footer() {
 return (
  <>
   <Box sx={styles.rootContainer}>
    <Box>
     <Typography sx={styles.copyRight}>
      &copy; {new Date().getFullYear()} JOT. All rights reserved.
     </Typography>
    </Box>

    <Box>
     <List sx={styles.footerListContainer}>
      {navItems.map(item => (
       <ListItem key={item} disablePadding>
        <ListItemButton>
         <ListItemText primary={item} />
        </ListItemButton>
       </ListItem>
      ))}
     </List>
    </Box>
   </Box>
  </>
 );
}

export default Footer;
