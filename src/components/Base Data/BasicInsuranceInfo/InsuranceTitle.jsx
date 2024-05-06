import React from "react";
import Button from "@mui/material/Button";
import styles from "../BillingCenter/Billing.module.css";

const InsuranceTitle = () => {
  return (
    <div className={styles.billingTitle}>
      <Button variant="contained">Basic Insurance Terminology</Button>
    </div>
  );
};

export default InsuranceTitle;
