import * as React from "react";
import Button from "@mui/material/Button";
import styles from "../Utils/TestData.module.css";

export default function TransTraactionInfo() {
  return (
    <div>
      <div className={styles.quickshortcuts}>
        <Button
          sx={{ height: "40px", width: "490px" }}
          variant="contained"
          target="_blank"
          href="https://smartims.sharepoint.com/:f:/s/SmartPortalihub/Ev60N4YHMFpEiGhZFKLSRGEBdnjhhSNddIAmx_u-hKuCdg?e=bxmRJB"
        >
          New Business
        </Button>
      </div>
      <div className={styles.npm}>
        <div className={styles.pagebuttons}>
          <div className={styles.horizontalbutton}>
            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              style={{ background: "red" }}
              target="_blank"
              href="https://smartims.sharepoint.com/:f:/s/SmartPortalihub/Ev60N4YHMFpEiGhZFKLSRGEBdnjhhSNddIAmx_u-hKuCdg?e=bxmRJB"
            >
              New Business
            </Button>

            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              style={{ background: "orange" }}
              href="/transinfo"
            >
              Bookmarks
            </Button>
          </div>

          <div className={styles.horizontalbutton}>
            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              //   style={{ background: "green" }}
              href="/transinfo"
            >
              Reports
            </Button>

            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              //   style={{ background: "green" }}
              href="/transinfo"
            >
              comments
            </Button>
          </div>
        </div>
        <div className={styles.pagebuttons}>
          <div className={styles.horizontalbutton}>
            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              style={{ background: "red" }}
              target="_blank"
              href="https://smartims.sharepoint.com/:f:/s/SmartPortalihub/Ev60N4YHMFpEiGhZFKLSRGEBdnjhhSNddIAmx_u-hKuCdg?e=bxmRJB"
            >
              New Business
            </Button>

            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              style={{ background: "orange" }}
              href="/transinfo"
            >
              Bookmarks
            </Button>
          </div>

          <div className={styles.horizontalbutton}>
            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              //   style={{ background: "green" }}
              href="/transinfo"
            >
              Reports
            </Button>

            <Button
              sx={{ height: "80px", width: "120px" }}
              variant="contained"
              //   style={{ background: "green" }}
              href="/transinfo"
            >
              comments
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
