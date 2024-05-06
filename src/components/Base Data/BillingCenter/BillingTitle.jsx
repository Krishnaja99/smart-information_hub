import React from "react";
import styles from "./Billing.module.css";
import Button from "@mui/material/Button";

const BillingTitle = () => {
  return (
    <div className={styles.billingTitle}>
      <Button variant="contained">Billing Center</Button>
    </div>
  );
};

export default BillingTitle;
