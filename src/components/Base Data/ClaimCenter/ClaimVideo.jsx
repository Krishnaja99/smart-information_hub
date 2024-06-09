import * as React from "react";
import Button from "@mui/material/Button";
import styles from "../BillingCenter/Trans.module.css";
import pic from "../../common/assets/BC Images/image3.jpg"
import pic1 from "../../common/assets/BC Images/image2.jpg"
import pic3 from "../../common/assets/BC Images/image1.jpg"

export default function ClaimVideo() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
      <div  className={styles.subDiv1} >
        

<Button
  className={styles.introButton}
  sx={{
    backgroundImage: `url(${pic1})`, // Add background image using inline styles
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "250px",
    width: "250px",
    textTransform: "none"
  }}
  variant="contained"
  target="_blank"
 style={{ color: 'Black' }}
 style={{ fontSize: '20px' }}
 
 href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EoOyfj80F39PlMnKzSKyLUcB50MXyknWe_K5WhLZDJS87A?e=oDRBcd"
>
  {/* Introduction to Billing Center */}
  Claim Center
</Button>

 </div>
 
      </div>
</div>
         
  );
}
 