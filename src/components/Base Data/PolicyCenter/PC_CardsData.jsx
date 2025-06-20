import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./policyter.module.css";
//import PolicyCenter from "./PolicyCenter";

const definitions = [
  { title: "Policy", description: "A contract between an individual (policyholder) and an insurance company detailing the terms and conditions of insurance." },
  { title: "Limit", description: "The maximum amount of money that will be provided for a covered loss by the carrier." },
  { title: "Short Rate Cancellation", description: "Prorates the refund and subtracts an additional amount for a processing fee." },
  { title: "Participants", description: "A policy center user that interacts with the policy. Participants can have roles such as Creator, Underwriter, Auditor." },
  { title: "Premium", description: "An amount of money paid by the account for the policy." },
  { title: "Form", description: "A physical document detailing some aspect of the policy." },
  { title: "Deductible", description: "The amount of money that the insured must pay out of pocket for a loss." },
  { title: "Declaration Sheet", description: "An index or summary of all exposures, coverages, and in some cases, forms." },
  { title: "Audit Transaction", description: "Updates the policy by adjusting estimated amounts with actual data." },
  { title: "Liability Coverages", description: "Cover the liability of the insured when damage is done to a third party (third-party coverages)." },
  { title: "Pro Rate Cancellation", description: "Pro-rates the premium to be refunded to the insured depending on the cancellation effective date." },
  { title: "Preemption", description: "Occurs when a second transaction is started before the first is bound, both from the same base period." },
  { title: "Coverage Term", description: "A value that further limits or defines the Coverage." },
  { title: "Account", description: "Organization or a person which/who basically can have one or more policies." },
  { title: "Exclusion Coverage", description: "Defines things explicitly not covered by the policy to avoid exposure to claims." },
  { title: "Coverable", description: "An exposure to risk that can be protected by the policy." },
  { title: "Modifiers", description: "A value used by the rating engine to adjust the policy premium." },
  { title: "Offerings", description: "Variations of policies depending on the buyer, based on existing product definitions." },
  { title: "Rescind Cancellation", description: "Cancels a scheduled cancellation before it’s completed, once the issue is resolved (e.g., non-payment resolved by payment)." },
  { title: "Product", description: "Captures marketing information about the product. Example: personal auto." },
  { title: "Underwriter", description: "An employee of the carrier who assesses applicants to determine insurability and cost." },
  { title: "Third Party", description: "A person who suffers a loss for which the insured is responsible." },
  { title: "Question Sets", description: "A set of questions that gather data about potential risks involved." },
  { title: "Property Coverage", description: "Covers tangible assets belonging to the insured such as a vehicle or home." },
  { title: "Coverage", description: "Specifies the type of risk covered in the policy. Always attached to a coverable." },
  { title: "External Systems", description: "External integrations like Smart Comms (document producer), Document Maker (storage), Rating System, etc." },
  { title: "Coverages Endorsements", description: "Forms that add additional coverage to a base form (e.g., hired auto coverage)." },
  { title: "Policy Line", description: "Group of legal and binding information about the product, like available deductibles and coverages." },
  { title: "OOS (Out of Sequence)", description: "Occurs when a transaction has an effective date prior to a previously created transaction." }
];

const PolicyCenter = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.definitionsContainer}>
        {definitions.map((def, index) => (
          <Tooltip
            key={index}
            title={<span className={styles.tooltipDescription}>{def.description}</span>}
            arrow
          >
            <div className={styles.definitionItem}>
              {def.title}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default PolicyCenter;