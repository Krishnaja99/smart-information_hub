import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Policy.module.css";

export default function PolicyTransactions() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
        <div className={styles.subDiv1}>
          <Button
            className={styles.introButton}
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            style={{ backgroundColor: "red" }}
            target="_blank"
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EvmTvjgdIFRHq3oHGnMjdFUBzmBInB9u1-Yn_wTq652MwQ?e=n4NbKc"
          >
            Introduction to Policy Center
          </Button>

          <Button
            sx={{
              height: "100px",
              width: "180px",
              textTransform: "none",
            }}
            variant="contained"
            style={{ background: "orange" }}
            target="_blank"
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EqisK1qJKFxOuQkqapGPtOcBZdD_zZrMCnDwyDYCCOBtlQ?e=Jd57iP"
          >
            Application Guide
          </Button>
        </div>

        <div className={styles.subDiv1}>
          <Button
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            // style={{ background: "Blue" }}
            target="_blank"
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EtG-BZp_ZP5JloDH-HiQoZgBtKFoefqJI8vRpM7rF4m_Cg?e=YgUNv5"
          >
            Transactions
          </Button>

          <Button
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            // style={{ background: "Blue" }}
            target="_blank"
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Eg51V6XNI3JOtUGw6dYgWYEBAW4vmqJVIYRvYGnTuwdAAQ?e=gggsKe"
          >
            Product Model
          </Button>
        </div>
      </div>

      <div className={styles.secondDiv}>
        <div className={styles.subDiv1}>
          <Button
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            style={{ background: "green" }}
            target="_blank"
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EmEtmrJUFQVHoWaJYPzZZUoB0gtdvwqhAydGBbvgRvNU1g?e=LrF22a"
          >
            Validations
          </Button>

          <Button
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            style={{ background: "green" }}
            target="_blank"
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EiyGTMtx7eBKrbs0voQuD38BAW65N8RBLfXW7uRU4B_yRw?e=m99vhx"
          >
            User & Authority
          </Button>
        </div>

        <div className={styles.subDiv1}>
          <Button
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            target="_blank"
            // style={{ background: "blue" }}
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/EoR-plek99pKpw_f2UfucNIBdEwtBkCb7SsPFtGNIxuzVg?e=qTE4zs"
          >
            Work Item Assistants
          </Button>
          <Button
            sx={{ height: "100px", width: "180px" }}
            variant="contained"
            target="_blank"
            // style={{ backgroundColor: "blue" }}
            href="https://smartims.sharepoint.com/:f:/s/SmartIHubInsuranceInformation/Euhg1hoCMZRPmg4WmOgoVPsBS-4JGaSLBFSJUFFq4yBrhw?e=VRbtbl"
          >
            Account & OtherTransactions
          </Button>
        </div>
      </div>
    </div>
  );
}
