import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./policyter.module.css";
//import PolicyCenter from "./PolicyCenter";

const definitions = [
  { title: "Account", description: "Organization or a person which/who basically can have one or more policies." },
  { title: "Activity", description: "An object to track the task to be performed while processing the claim." },
  { title: "Adjuster", description: "An insurance claims agent charged with evaluating an insurance claim to determine the company’s liability in a policy." },
  { title: "Audit transaction", description: "Updates the policy by adjusting estimated amounts with actual data." },
  { title: "Authority limits", description: "Used to determine if a financial transaction can be automatically approved, or if it requires further manual approval by a supervisor. (For example: Claim Available Reserves, claim Total reserves, payment amount etc.)" },
  { title: "Bulk check", description: "Financial object that is used for making payment to a single vendor from multiple claims." },
  { title: "Claim associations", description: "Strategic grouping of the claims in case of same loss cause like catastrophes, natural disasters, etc." },
  { title: "Claimant", description: "The party claiming the loss for the incident." },
  { title: "Check", description: "Financial object for payment of claim amount to the loss party." },
  { title: "Contact roles", description: "Role of contact involved in processing the claim." },
  { title: "Coverage", description: "The line-item part of insurance agreement under which claim is eligible for payment." },
  { title: "Coverage term", description: "A value that further limits or defines the coverage." },
  { title: "Coverable", description: "It is an exposure to risk that can be protected by the policy." },
  { title: "Coverages endorsements", description: "The forms add additional coverage (for example, a hired auto coverage form might add hired auto coverage to a base form that did not originally specify this)." },
  { title: "Declaration sheet", description: "An index or summary of all exposures, coverages and in some cases forms." },
  { title: "Deductible", description: "The amount of money that the insured must pay out of pocket for a loss." },
  { title: "Exclusion coverage", description: "An exclusion coverage defines things that are explicitly not covered by the policy, so that the carrier leaves no exposure to claims in those areas." },
  { title: "External systems", description: "Policy center is typically integrated with a number of external systems. The connections to these systems are configured through the application APIs. (Smart Comms, which is the document producing system, Document maker, which is the document storing system, Rating system if external Rating system if external rating is involved." },
  { title: "Exposure", description: "Term used to track payments for one claimant to coverage." },
  { title: "Fault rating", description: "Used to determine which party bears responsibility for the loss. Values include none, other party at fault, no fault, insured at fault." },
  { title: "Form", description: "A form is a physical document detailing some aspect of the policy." },
  { title: "Group", description: "Strategic division of user based on parameters like regions, specialization." },
  { title: "Incident", description: "Term used to define the details of the loss." },
  { title: "Indemnity", description: "Exposure used to track payments related to time loss during rehabilitation of injured worker." },
  { title: "Liability coverages", description: "These coverages cover the liability of the insured when damage is done to a third party. These are often referred to as third party coverages." },
  { title: "Limit", description: "The maximum amount of money that will be provided for a covered loss by the carrier." },
  { title: "Manual check", description: "Payment entry in claim center for the offline payments made." },
  { title: "Matter", description: "Term used to deal with litigation involved in a claim while processing." },
  { title: "Modifiers", description: "A modifier is a value used by the rating engine to adjust the policy premium." },
  { title: "Negotiation", description: "Part of the plan of action for settling complex claims without restoring to legal action. Negotiations help you plan how you will discuss the claim when negotiating a settlement with the claimant or representatives of the claimant." },
  { title: "Net incurred", description: "Total amount paid by insurer as part of claim after deducting recoveries." },
  { title: "Note", description: "A simple object to store the key data while processing of claim." },
  { title: "OOS (out of sequence)", description: "Suppose there are three transactions submission with effective date 01-01-2021, 1st policy change with effective date 03-01-2021 and 2nd policy change with effective date 02-01-2021. In this scenario, the second policy change’s transaction effective date is prior to the previous transaction effective date. Hence, the second policy change is an OOS transaction." },
  { title: "Offerings", description: "Insurers need variations of policies depending on buyer. An offering lets insurers define different product types based on existing product definitions." },
  { title: "Participants", description: "A participant is a policy center user that interacts with the policy. Participant can have roles such as Creator, Underwriter, Auditor." },
  { title: "Payee", description: "The party to whom the amount is paid for the loss." },
  { title: "Policy", description: "It is a contract between an individual (policy holder) and an insurance company (carrier) detailing the terms and conditions of insurance." },
  { title: "Policy line", description: "A policy line is a group of 'legal and binding' information about the product, such as (a) What deductible values are available for selection? (b) What coverages are available on the policy?" },
  { title: "Preemption", description: "A preemption occurs when a transaction is created and before it is bound a second transaction is started. The critical issue here is that two transactions have been started from the same base period." },
  { title: "Premium", description: "It is an amount of money paid by the account for the policy." },
  { title: "Pro rate cancellation", description: "Pro-rate cancellation pro-rates the premium to be refunded to the insured depending on the cancellation effective date." },
  { title: "Product", description: "Product captures marketing information about the product. Ex: personal auto etc." },
  { title: "Question sets", description: "A set of questions that gather data about potential risks involved." },
  { title: "Recode", description: "Mapping of payment from one reserve line to another reserve line within a claim." },
  { title: "Recovery", description: "Amount received by the insurer in return in the form of Deductible, subrogation…etc." },
  { title: "Recovery reserve", description: "Amount expected by the insurer in return in the form of Deductible, subrogation…etc." },
  { title: "Rescind cancellation", description: "After a cancellation has been scheduled (but before it has been completed), you can rescind the cancellation. This indicates that the issue that initially required the cancellation has been rectified. For example, if there is scheduled cancellation because of non-payment of premium on a policy. Once the policy holder pays the premium, the scheduled cancellation is rescinded." },
  { title: "Reserve", description: "Amount set aside for the payments expected." },
  { title: "Salvage", description: "A process of recovery from the damaged property for which insurer has made full reimbursement." },
  { title: "Segmentation", description: "To determine the strategy of handling a claim based on complexity." },
  { title: "Services", description: "Actions performed by third party to complete process of compensating claim." },
  { title: "Short rate cancellation", description: "Short rate cancellation prorates the refund and subtracts an additional amount for a processing fee." },
  { title: "Third party", description: "Refers to a person who suffers a loss for which the insured is responsible, the first party is the insured and the second party is the carrier." },
  { title: "Transfer", description: "Moving a payment, check, or a recovery from one claim to another claim." },
  { title: "Underwriter", description: "An employee of the carrier who assesses applicants to determine if it's economically advisable to insure an applicant and if so at what cost." },
  { title: "User roles", description: "Defines the actions user is authorized to perform." },
  { title: "Validation level", description: "Used in validating an entity to determine its lifecycle stage. For example, if you create a claim from the wizard, the 'New Loss Completion' validation level defines the minimum amount of information for it to be saved as a claim." },
  { title: "Void/stop", description: "Hold on the processing of payment for which check is already submitted." },
  { title: "Work plan", description: "Set of activities to be completed to finish the processing of claim." }
];

const PolicyCenter = () => {
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

export default PolicyCenter;
