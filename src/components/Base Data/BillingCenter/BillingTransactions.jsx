import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Billing.module.css";

export default function PolicyTransactions() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
      <div  className={styles.subDiv1} >
        <Button className={styles.introButton}
          sx={{ height: "100px", width: "180px",textTransform: "none"}}
          variant="contained"
          style={{ backgroundColor: "red" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartPortalihub/Ev60N4YHMFpEiGhZFKLSRGEBdnjhhSNddIAmx_u-hKuCdg?e=bxmRJB"
        >
         Introduction to Policy Center
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          style={{ background: "orange" }}
          href="/transinfo"
        >
          Product Model
        </Button>
      </div>
 
      <div className={styles.subDiv1}>
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "Blue" }}
          href="/transinfo"
        >
          Transactions
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "Blue" }}
          href="/transinfo"
        >
          Work Item Assistants
        </Button>
      </div>
 
      </div>




      <div className={styles.secondDiv}>
      <div  className={styles.subDiv1}>
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          style={{ background: "green" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartPortalihub/Ev60N4YHMFpEiGhZFKLSRGEBdnjhhSNddIAmx_u-hKuCdg?e=bxmRJB"
        >
         Introduction to Policy Center
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="outlined"
          style={{ background: "lightblue " }}
          href="/transinfo"
        >
          Product Model
        </Button>
      </div>
 
      <div className={styles.subDiv1}>
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ backgroundColor: "blue" }}
          href="/transinfo"
        >
          Transactions
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "blue" }}
          href="/transinfo"
        >
          Work Item Assistants
        </Button>
      </div>
 
      </div>
 
      
          </div>
    
  );
}
 