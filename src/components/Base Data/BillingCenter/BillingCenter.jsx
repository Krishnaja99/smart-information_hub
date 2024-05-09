import React from "react";
import styles from "/workspace/Smart/Smart-Information_Hub/src/components/Utils/Page Styles/Basedata.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BillingCenter = () => {
  return (
    <div>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Billing Process
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Process by which the carrier manages the financial transactions
            required to keep policies in force.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Owner
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            The legally responsible party for all policies on the account.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Carrier
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is the insurance company that provides the policy.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Payer
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            One who receives invoices for charges
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Payment
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Money sent to the carrier.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Direct Bill
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Money is directly sent to the carrier.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Agency Bill
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Money is sent through the producer.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Token
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is returned from the external system to identify the payment
            instrument.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Payment Instrument
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is an object that represents payment information such as credit
            card or bank details.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Write Off
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            WriteOff allows Billing Center to cancel assets(Charges) held in
            charge invoicing
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Invoice Item
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is the portion of a charge that is separately invoiceable.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Invoice
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            An invoice is an itemized bill requesting payment on a policy in an
            account.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Trouble Ticket
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Process that identifies and tracks an insured's complaint.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Charge
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is a cost associated with the policy or account transaction that
            must be processed and/or tracked as a unit.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Charge Invoicing
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Process of dividing charges into invoice items and assigning the
            items to invoices.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Charge Hold
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Charge Hold prevents Billing Center from continuing to bill the
            insured.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Process Hold
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            A process Hold stops automated Billing Center behaviour while a
            carrier investigates and corrects a billing problem.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Charge Date
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Date billing center receives the billing instruction that contains
            the charge.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Invoice Date
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Date an invoice is billed. Also called as Bill Date or Statement
            Date.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Due Date
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Last Date an invoice can be paid before it becomes past due. ( Due
            date = Bill date + Lead time)
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Delinquency
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Process by which Billing Center identifies an account with overdue
            payments.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Item Commission
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is the commission that is receivable for the charge item
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Commission Payable
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Amount earned and to be paid on producer's commission day of month.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Producer Code
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Code that ties a given policy transaction to a specific producer and
            commission plan.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Commission
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is a fee paid to a producer, usually as a percentage of a policy
            premium.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Commission Plan
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Specifies which items are commissionable and determines the rate of
            commission paid to a producer for selling or renewing a policy.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Commission Statement
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Last Date an invoice can be paid before it becomes past due. ( Due
            date = Bill date + Lead time)Shows Commission payable and payment
            activity for a producer.
          </Typography>
        </CardContent>
      </Card>

      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Disbursement
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            A disbursement is a refund. Disbursements can be created either
            manually or automatically
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingCenter;
