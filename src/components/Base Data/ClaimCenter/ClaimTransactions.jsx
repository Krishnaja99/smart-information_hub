import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Claims.module.css";

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
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Eoqw1dDxeBdHkNQ3JEWzvbABeF0eY_oODcLrRoxm99kdlw?e=LR7TF1"
        >
         Introduction to Claim Center
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          style={{ background: "orange" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Eib7UsZhr3JAlk4fvV6DqGwBjEStIWVHwQbDA51v8nimzw?e=pGuiVN"
        >
          Application Guide
        </Button>
      </div>
 
      <div className={styles.subDiv1}>
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "Blue" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/ElndOEfTKn1Nuj5dP1bYTLoBh51_Ov86GXrIHpQDfEBTYQ?e=hethGC"
        >
          Transactions in Claims
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "Blue" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EmLWhzSPonJFto9BGln8pR8Bk0FsAXFKqvK1P3_s7Ozq3w?e=r6vvuR"
        >
          Assignment to Adjuducation
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
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EtKvYfNsnghDgt19xbB_dswB1y46rUBj-Y6sVgXXVRjm9g?e=HlGEoH"
        >
         Finance
        </Button>

        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          style={{ background: "green" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Ehg5Hjb4eLJOqaV77nyFjEABtfCeZX0SyqzvvPFpZrNkDg?e=VShJg6"
        >
        User & Authority
        </Button>
        </div>

        <div className={styles.subDiv1}>
         <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          target="_blank"
          // style={{ background: "blue" }}
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EkFzKVV8duNNqH4FuCQ0sBwB6_MWJCjiClEaMtpBfnUppg?e=f7acT2"
        >
          Work Item Assistants
        </Button>
         <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          target="_blank"
          // style={{ backgroundColor: "blue" }}
          href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Etat5cXZeqBHvaHbJ__2X-kBxullTNbQ186JBKLK98uP9g?e=ZFZmPw"
        >
          Closing Claims
        </Button>

      </div>
 
      </div>
      </div>
      
    );
  }
 