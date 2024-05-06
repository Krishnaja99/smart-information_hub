import React from "react";
import styles from "../BillingCenter/Billing.module.css";
import Button from "@mui/material/Button";

const PolicyTitle = () => {
  return (
    <div className={styles.billingTitle}>
      <Button variant="contained">Policy Center</Button>
    </div>
  );
};

export default PolicyTitle;
