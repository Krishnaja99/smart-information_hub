import React from "react";
import Button from "@mui/material/Button";
import styles from "./Advancement.module.css";

const Knowledge = () => {
  return (
<div className={styles.channelLinks}>

    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "green" }}
        href="https://smartims.sharepoint.com/:f:/s/InsurancePractice-InsuranceKnowledgeManagement/Eg4PNojOqhZBv_bZ3IhhxgwBPRgpJ9OA1UJ7FO2QP13O0w"
        target="_blank"
      >
        Softskill Developement
      </Button>
      </div>
<div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "green" }}
        href="https://smartims.sharepoint.com/:f:/s/InsurancePractice-InsuranceKnowledgeManagement/EquDK1fTrD1CmQ7tJVAPrjABP2AKw5Vvup6virt2tl3c5g?e=KOtsYZ"
        target="_blank"
      >
        Line of Business 

      </Button>
      </div>

    </div>
  );
};

export default Knowledge;
