import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./CC.module.css";

const definitions = [
  { title: "Activity", description: "An object to track the task to be performed while processing the claim." },
  { title: "Adjuster", description: "An insurance claims agent charged with evaluating an insurance claim to determine the company’s liability in a policy." },
  { title: "Authority limits", description: "Used to determine if a financial transaction can be automatically approved, or if it requires further manual approval by a supervisor. (For example: Claim Available Reserves, claim Total reserves, payment amount etc.)" },
  { title: "Bulk check", description: "Financial object that is used for making payment to a single vendor from multiple claims." },
  { title: "Check", description: "Financial object for payment of claim amount to the loss party." },
  { title: "Claim associations", description: "Strategic grouping of the claims in case of same loss cause like catastrophes, natural disasters, etc." },
  { title: "Claimant", description: "The party claiming the loss for the incident." },
  { title: "Contact roles", description: "Role of contact involved in processing the claim." },
  { title: "Coverage", description: "The line-item part of insurance agreement under which claim is eligible for payment." },
  { title: "Exposure", description: "Term used to track payments for one claimant to coverage." },
  { title: "Fault rating", description: "Used to determine which party bears responsibility for the loss. Values include none, other party at fault, no fault, insured at fault." },
  { title: "Group", description: "Strategic division of user based on parameters like regions, specialization." },
  { title: "Indemnity", description: "Exposure used to track payments related to time loss during rehabilitation of injured worker." },
  { title: "Incident", description: "Term used to define the details of the loss." },
  { title: "Manual check", description: "Payment entry in claim center for the offline payments made." },
  { title: "Matter", description: "Term used to deal with litigation involved in a claim while processing." },
  { title: "Negotiation", description: "Part of the plan of action for settling complex claims without restoring to legal action. Negotiations help you plan how you will discuss the claim when negotiating a settlement with the claimant or representatives of the claimant." },
  { title: "Net incurred", description: "Total amount paid by insurer as part of claim after deducting recoveries." },
  { title: "Note", description: "A simple object to store the key data while processing of claim." },
  { title: "Payee", description: "The party to whom the amount is paid for the loss." },
  { title: "Recode", description: "Mapping of payment from one reserve line to another reserve line within a claim." },
  { title: "Recovery", description: "Amount received by the insurer in return in the form of Deductible, subrogation…etc." },
  { title: "Recovery reserve", description: "Amount expected by the insurer in return in the form of Deductible, subrogation…etc." },
  { title: "Reserve", description: "Amount set aside for the payments expected." },
  { title: "Salvage", description: "A process of recovery from the damaged property for which insurer has made full reimbursement." },
  { title: "Segmentation", description: "To determine the strategy of handling a claim based on complexity." },
  { title: "Services", description: "Actions performed by third party to complete process of compensating claim." },
  { title: "Transfer", description: "Moving a payment, check, or a recovery from one claim to another claim." },
  { title: "User roles", description: "Defines the actions user is authorized to perform." },
  { title: "Validation level", description: "Used in validating an entity to determine its lifecycle stage. For example, if you create a claim from the wizard, the 'New Loss Completion' validation level defines the minimum amount of information for it to be saved as a claim." },
  { title: "Void/stop", description: "Hold on the processing of payment for which check is already submitted." },
  { title: "Work plan", description: "Set of activities to be completed to finish the processing of claim." }
];

const ClaimCenter = () => {
  return (
    <div className={styles.mainDiv}>
    <div className={styles.definitionsContainer}>
      {definitions.map((def, index) => (
        <Tooltip
          key={index}
          title={<span className={styles.tooltipDescription}>{def.description}</span>}
          // classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
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

export default ClaimCenter;
