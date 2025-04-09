import React from "react";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import smartimslogo from "../assets/SmartIMS Logos/9eb5bb4aa8b0d62a8604aa08b74d.png";
import ihubLogo from "../assets/Insurance OR Iformation/Bulb.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

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
        Raghunath Kotturi <br />
        General Manager - Projects || Billing
        <br />
        Email: raghunadh.kotturi@smartims.com
      </MenuItem>
      <hr />
      <MenuItem
        component={Link}
        to="https://teams.microsoft.com/v2/"
        target="_blank"
        onClick={handleMenuClose}
        sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
      >
        Dilip Gunapalli <br />
        Senior Functional Lead - II || Claims
        <br />
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
        Deepa S<br />
        General Manager - Projects || Policy
        <br />
        Email: deepa.sethuraman@smartims.com
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.ihubLogo}>
          {/* <img style={{height:"100px", width:"300px"}} src={ihubLogo} alt="" /> */}
        </div>
        <div className={styles.container_1}>
          <Tooltip
            title={
              <span
                style={{
                  fontSize: "14px",
                  color: "blue",
                  textAlign: "center",
                  display: "block",
                  fontFamily: "Times New Roman ",
                }}
              >
                Your central space for questions,
                ideas, and clarity.
              </span>
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "transparent",
                  color: "#000",
                  boxShadow: "none",
                  border: "none",
                  p: 0,
                },
              },
              arrow: {
                color: "transparent",
              },
            }}
          >
            <Button
              variant="contained"
              href="https://teams.microsoft.com/l/channel/19%3ABVs_u8Rkp6utoIXN0ny6XH5znt21gDnnKXtQ7CW4jh01%40thread.tacv2/AskBoard?groupId=0d437b59-9202-49bf-9b66-fcdcd27cbb00&tenantId=6027c9ba-290d-41f0-81a6-035f3a3d1a6e"
              target="_blank"
            >
              Ask Board
            </Button>
          </Tooltip>

          <Tooltip
            title={
              <span
                style={{
                  fontSize: "14px",
                  color: "blue",
                  textAlign: "center",
                  display: "block",
                  fontFamily: "Times New Roman",
                }}
              >
                Get to know the world of Insurance
              </span>
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "transparent",
                  color: "blue",
                  boxShadow: "none",
                  border: "none",
                  p: 0,
                },
              },
              arrow: {
                color: "transparent",
              },
            }}
          >
            <Button
              variant="contained"
              href="https://smartims.sharepoint.com/:x:/s/SmartIHubInsuranceInformation/ESVpDPSo60xBvgj9910-hrMBRaqQ5t6owlj2lsbN6gqhqQ?e=vMFxBz"
              target="_blank"
            >
              Introduction to Insurance
            </Button>
          </Tooltip>

          <Tooltip
            title={
              <span
                style={{
                  fontSize: "14px",
                  color: "blue",
                  textAlign: "center",
                  display: "block",
                  fontFamily: "Times New Roman",
                }}
              >
                Know more about SmartIMS
              </span>
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "transparent",
                  color: "blue",
                  boxShadow: "none",
                  border: "none",
                  p: 0,
                },
              },
              arrow: {
                color: "transparent",
              },
            }}
          >
            <Button
              variant="contained"
              href="https://www.smartims.com/"
              target="_blank"
            >
              About SmartIms
            </Button>
          </Tooltip>
        </div>

        <div className={styles.smartimslogopng}>
          <img
            style={{ height: "100px", width: "300px" }}
            src={smartimslogo}
            alt=""
          />
        </div>
      </div>
      {renderMenu}
    </div>
  );
};

export default Header;
