import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Billing.module.css";

const definitions = [
  { title: "Agency Bill", description: "Money is sent through the producer." },
  { title: "Billing Process", description: "Process by which the carrier manages the financial transactions required to keep policies in force." },
  { title: "Carrier", description: "It is the insurance company that provides the policy." },
  { title: "Charge", description: "It is a cost associated with the policy or account transaction that must be processed and/or tracked as a unit." },
  { title: "Charge Date", description: "Date Billing Center receives the billing instruction that contains the charge." },
  { title: "Charge Hold", description: "Charge Hold prevents Billing Center from continuing to bill the insured." },
  { title: "Charge Invoicing", description: "Process of dividing charges into invoice items and assigning the items to invoices." },
  { title: "Commission", description: "It is a fee paid to a producer, usually as a percentage of a policy premium." },
  { title: "Commission Payable", description: "Amount earned and to be paid on producer's commission day of month." },
  { title: "Commission Plan", description: "Specifies which items are commissionable and determines the rate of commission paid to a producer for selling or renewing a policy." },
  { title: "Commission Statement", description: "Shows Commission payable and payment activity for a producer." },
  { title: "Delinquency", description: "Process by which Billing Center identifies an account with overdue payments." },
  { title: "Direct Bill", description: "Money is directly sent to the carrier." },
  { title: "Disbursement", description: "A disbursement is a refund. Disbursements can be created either manually or automatically." },
  { title: "Due Date", description: "Last Date an invoice can be paid before it becomes past due. (Due date = Bill date + Lead time)." },
  { title: "Invoice", description: "An invoice is an itemized bill requesting payment on a policy in an account." },
  { title: "Invoice Date", description: "Date an invoice is billed. Also called as Bill Date or Statement Date." },
  { title: "Invoice Item", description: "It is the portion of a charge that is separately invoiceable." },
  { title: "Item Commission", description: "It is the commission that is receivable for the charge item." },
  { title: "Owner", description: "The legally responsible party for all policies on the account." },
  { title: "Payer", description: "One who receives invoices for charges." },
  { title: "Payment", description: "Money sent to the carrier." },
  { title: "Payment Instrument", description: "It is an object that represents payment information such as credit card or bank details." },
  { title: "Process Hold", description: "A process Hold stops automated Billing Center behavior while a carrier investigates and corrects a billing problem." },
  { title: "Producer Code", description: "Code that ties a given policy transaction to a specific producer and commission plan." },
  { title: "Token", description: "It is returned from the external system to identify the payment instrument." },
  { title: "Trouble Ticket", description: "Process that identifies and tracks an insured's complaint." },
  { title: "Write Off", description: "WriteOff allows Billing Center to cancel assets (Charges) held in charge invoicing." }
];

const BillingCenter = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.definitionsContainer}>
        {definitions.map((def, index) => (
          <Tooltip key={index} title={def.description} arrow>
            <div className={styles.definitionItem}>
              {def.title}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default BillingCenter;
