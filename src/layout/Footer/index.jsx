import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./index.style";
import { footerNavElements } from "../../constants/appConstants";

function Footer() {
  const date = new Date();
  return (
    <>
      <Box sx={styles.rootContainer}>
        <Box>
          <Typography sx={styles.copyRight}>
            &copy; {date.getFullYear()} JOT. All rights reserved.
          </Typography>
        </Box>

        <Box>
          <List sx={styles.footerListContainer}>
            {footerNavElements.map((item) => (
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
