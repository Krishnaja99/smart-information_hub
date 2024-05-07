import React from "react";
import Button from "@mui/material/Button";
import styles from "./Advancement.module.css";

const Knowledge = () => {
  return (
    <div className={styles.channelLinks}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "gray" }}
        href="https://smartims.sharepoint.com/:f:/s/InsurancePractice-InsuranceKnowledgeManagement/Eg4PNojOqhZBv_bZ3IhhxgwBPRgpJ9OA1UJ7FO2QP13O0w"
        target="_blank"
      >
        Softskill Developement
      </Button>
    </div>
  );
};

export default Knowledge;
