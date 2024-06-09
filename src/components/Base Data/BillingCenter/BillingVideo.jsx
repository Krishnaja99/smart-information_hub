import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Trans.module.css";
import pic from "../../common/assets/BC Images/image3.jpg"
import pic1 from "../../common/assets/BC Images/image2.jpg"
import pic3 from "../../common/assets/BC Images/image1.jpg"

export default function BillimgVideo() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
      <div  className={styles.subDiv1} >
        <Button className={styles.introButton}
          sx={{ height: "100px", width: "180px",textTransform: "none"}}
          variant="contained"
          style={{ backgroundColor: "red" }}
          target="_blank"
          href="https://smartims.sharepoint.com/:t:/s/ChennasDirect/EWr3Aqh-1hZLub31WLCLsfkB3lKBJ_gZ5WZIi5HWKT5GAg?e=WoKxdx"
        >
         {/* Introduction to Billing Center */}
         Testing 
        </Button>

   <Button
  className={styles.introButton}
  sx={{
    backgroundImage: `url(${pic})`, // Add background image using inline styles
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
 
 href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EtRWxBCa949LnllV9UMl35UB2giwwDZG_hmqHGZkHin0fA?e=nYSBWZ"
>
  {/* Introduction to Billing Center */}
  Tutorials By Rupesh 
</Button>

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
 
 href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Eiz6gPKY4glBr90Uo38MdS4BdM7uCSQYb0ska3SCxM_GqA?e=C71bxV"
>
  {/* Introduction to Billing Center */}
  Tutorials By Raghunadh
</Button>

<Button
  className={styles.introButton}
  sx={{
    backgroundImage: `url(${pic3})`, // Add background image using inline styles
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
 
 href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Ekt65U8KTQNPg9yzreQirYIBRjQFNwSnQ8TYoeZ3BDplzg?e=lKCm6s"
>
  {/* Introduction to Billing Center */}
  Tutorials By Srikanth
</Button>






 </div>
 
      </div>
</div>
         
  );
}
 