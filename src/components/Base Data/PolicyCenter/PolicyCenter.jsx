import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PC_CardsData from "./PC_CardsData";
import PolicyTransactions from "./PolicyTransactions";
import styles from "../../Utils/Page Styles/TabwiseData.module.css";
import PolicyVideo from "../PolicyCenter/PolicyVideo" ;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PolicyCenter() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleItemClick = () => {
    console.log("Item One clicked");
  };

  return (
    <div className={styles.tabsAligining}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Terminology"
              onClick={handleItemClick}
              {...a11yProps(0)}
            />
            <Tab
              label="Self Paced Learning"
              onClick={handleItemClick}
              {...a11yProps(1)}
            />
            <Tab label="Self Guided Video"
             onClick={handleItemClick}
            {...a11yProps(2)}
             />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {value === 0 && <PC_CardsData />}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {value === 1 && <PolicyTransactions />}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        {value === 2 && <PolicyVideo />}
        </CustomTabPanel>
      </Box>
    </div>
  );
}
