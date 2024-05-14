import React from "react";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import smartimslogo from "../assets/SmartIMS Logos/9eb5bb4aa8b0d62a8604aa08b74d.png";
// import ihubLogo from "../assets/ihubLogo_Violet (1).png";
import ihubLogo from "../assets/Insurance OR Iformation/Exact Green.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        component={Link}
        to="https://teams.microsoft.com/v2/"
        target="_blank"
        onClick={handleMenuClose}
        sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
      >
        Raghunath Kotturi <br></br>General Manager - Projects || Billing
        <br></br>Email: raghunadh.kotturi@smartims.com
      </MenuItem>
      <hr />
      <MenuItem
        component={Link}
        to="https://teams.microsoft.com/v2/"
        target="_blank"
        onClick={handleMenuClose}
        sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
      >
        Dilip Gunapalli <br></br>Senior Functional Lead - II || Claims
        <br></br>
        Email: dilip.gunapalli@smartims.com
      </MenuItem>
      <hr />
      <MenuItem
        component={Link}
        to="https://teams.microsoft.com/v2/"
        target="_blank"
        onClick={handleMenuClose}
        sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
      >
        Deepa S<br></br>General Manager - Projects || Policy
        <br></br>Email: deepa.sethuraman@smartims.com
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.ihubLogo}>
          <img src={ihubLogo} alt="" />
        </div>
        <div className={styles.container_1}>
          <Button
            variant="contained"
            sx={{ background: "green" }}
            onClick={handleProfileMenuOpen}
          >
            Resources
          </Button>
          <Button
            variant="contained"
            style={{ background: "green" }}
            href="/dash"
          >
            Products
          </Button>
          <Button
            variant="contained"
            href="https://www.smartims.com/"
            style={{ background: "green" }}
            target="_blank"
          >
            About SmartIms
          </Button>
        </div>
        <div className={styles.smartimslogopng}>
          <img src={smartimslogo} alt="" />
        </div>
      </div>
      {renderMenu}
    </div>
  );
};
export default Header;
