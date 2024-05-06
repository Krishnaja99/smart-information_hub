import React from "react";
import styles from "../BillingCenter/Billing.module.css";
import Button from "@mui/material/Button";

const ClaimTitle = () => {
  return (
    <div className={styles.billingTitle}>
      <Button variant="contained">Claim Center</Button>
    </div>
  );
};

export default ClaimTitle;
