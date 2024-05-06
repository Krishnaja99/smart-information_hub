import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Claims.module.css";
import ClaimTitle from "./ClaimTitle";
import billingStyles from "../BillingCenter/Billing.module.css";
import Button from "@mui/material/Button";

const ClaimCardData = () => {
  return (
    <div>
      {/* <div className={billingStyles.billingHeader}>
        <Button variant="text" className={styles.goToHome} href="/">
          {`<`} Return To Home
        </Button>
        <ClaimTitle />
      </div> */}
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
            Claim
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            An insurance claim is a formal request by a policyholder to an
            insurance company for coverage or compensation for a covered loss or
            policy event.
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
            Reserve
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Amount set aside for the payments expected.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Recovery
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Amount received by the insurer in return in the form Deductible,
            subrogation…etc.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Contact Roles
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Role of contact involved in processing the claim.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Note
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            A simple object to store the key data while processing of claim.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "120px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Validation Level
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Used in validating an entity to determine its lifecycle stage. For
            ex: If you create a claim from the wizard, the “New Loss Completion”
            validation level defines the minimum amount of information for it to
            be saved as a claim.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            User Roles
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Defines the actions user is authorized to performm.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "120px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Negotiation
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Part of the plan of action for settling complex claims without
            restoring to legal action. Negotiations helps you plan how you will
            discuss the claim when negotiating a settlement with the claimant or
            representatives of the claimant
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Adjuster
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            An insurance claims agent charged with evaluating an insurance claim
            to determine the company's liability in a policy.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Claimant
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            The party claiming the loss for the incident
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "auto", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Segmentation
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            To determine the strategy of handling a claim based on complexity
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "100px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
            Fault Rating
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Used to determine which party bears responsibility for the loss.
            Values include none, other party at fault, no fault, insured at
            fault
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimCardData;
