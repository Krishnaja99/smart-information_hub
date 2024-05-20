import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Trans.module.css";

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
          href=""
        >
         Introduction to Billing Center
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          style={{ background: "orange" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:b:/s/SmartIHubInsuranceInformation/EdaZ2az-r0ZMszuDoIAdT94BFrJEbJFvEzSW6PEG0_p42Q?e=RyHk5g"
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
          href="https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/ETsw6JSETMpHmyInOSxGS1UBGOKltmZINKUmzaVW1C-QgQ?e=tUqJXW"
        >
          Delinquency
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "Blue" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EfbM8IZRZa5HtlxUCJ6BA3gB9UEfOh_jpN1OSjva1WxNQg?e=TTTuxd"
        >
          Charge Invoice Plugins
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
          href="https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/ET937CLCABNAgMkwMpkhtUIBSy6MDD-CEv7pLaVD5TzS5w?e=vrpUPG"
        >
         WorkFlow Processes 
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="outlined"
          style={{ background: "lightblue " }}
          target="_blank"
          href="https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EUPDRcmfADFLoaM-NBAD-KUBHUIrjsxDXDdwNKuUcoON6A?e=4b5f29"
        >
         Configuring WorkFlow
        </Button>
      </div>
 
      <div className={styles.subDiv1}>
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ backgroundColor: "blue" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:p:/s/SmartIHubInsuranceInformation/EXAmAa5zDUJNuWRJ1BhSUecB4_AzOJCw14KNT7dFfDv5IQ?e=2w3LSw"
        >
          WorkFlow Delinquency
        </Button>
 
        <Button
          sx={{ height: "100px", width: "180px",textTransform: "none" }}
          variant="contained"
          // style={{ background: "blue" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:b:/s/SmartIHubInsuranceInformation/ET8bchX3d3BKqsyo7HpeO-IBd_7SCTfPLr4_UbzAljWSnw?e=6maEkG"
        >
          Charge Invoicing
        </Button>
      </div>
 
      </div>
 
      
          </div>
    
  );
}
 