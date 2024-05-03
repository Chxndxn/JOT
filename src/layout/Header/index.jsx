import styles from "./index.style";
import { headerNavElements } from "../../constants/appConstants";
import WebsiteLogo from "../WebsiteLogo";
import {
  AppBar,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

function Header() {
  const handleOnClick = (item) => {
    console.log(`${item} has been clicked!`);
  };
  return (
    <AppBar position="static" sx={styles.rootContainer}>
      <Toolbar sx={styles.mainContainer}>
        {/* App icon */}
        <WebsiteLogo />

        {/* App Navigation links */}
        <List sx={styles.listContainer}>
          {headerNavElements.map((item, index) => (
            <ListItemButton key={index} onClick={() => handleOnClick(item)}>
              <ListItemText style={styles.listStyle}>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
