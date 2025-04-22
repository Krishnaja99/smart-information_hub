import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleInsuranceClick = () => {
    navigate("/insurance-table");
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
        to="/"
        onClick={handleMenuClose}
        sx={{
          color: "#1976d2",
          fontFamily: "cursive",
          fontWeight: "bold",
        }}
      >
        Return to Home
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Left Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            size="large"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* App Title */}
          <Button
            variant="text"
            href="/"
            sx={{
              fontFamily: "Roboto Slab",
              fontSize: "20px",
              textTransform: "none",
              color: "white",
            }}
          >
            IK
            <Box
              component="span"
              sx={{
                verticalAlign: "super",
                fontSize: "10px",
              }}
            >
              now
            </Box>
            &nbsp;(Insurance/Information)
          </Button>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              marginBottom: "5px",
            }}
          >
            <Tooltip
              title={
                <span style={{ fontSize: "14px", fontFamily: "Times New Roman", color: "white" }}>
                  Your central space for questions, ideas, and clarity.
                </span>
              }
              arrow
              placement="bottom"
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
                <span style={{ fontSize: "14px", fontFamily: "Times New Roman", color: "white" }}>
                  Get to know the world of Insurance
                </span>
              }
              arrow
              placement="bottom"
            >
              <Button variant="contained" onClick={handleInsuranceClick}>
                Introduction to Insurance
              </Button>
            </Tooltip>

            <Tooltip
              title={
                <span style={{ fontSize: "14px", fontFamily: "Times New Roman", color: "white" }}>
                  Know more about SmartIMS
                </span>
              }
              arrow
              placement="bottom"
            >
              <Button
                variant="contained"
                href="https://www.smartims.com/"
                target="_blank"
              >
                About SmartIMS
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
