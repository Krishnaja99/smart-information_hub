import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "../../Utils/Page Styles/Basedata.module.css";

const PolicyCenter = () => {
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
            Policy
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is a contract between an individual (policy holder) and an
            insurance company (carrier) detailing the terms and conditions of
            insurance.
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
            Limit
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            The maximum amount of money that will be provided for a covered loss
            by the carrier.
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
            Short Rate Cancellation
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Short rate cancellation prorates the refund and subtracts an
            additional amount for a processing fee.
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
            Participants
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            A participant is a policy center user that interacts with the
            policy. Participant can have roles such as Creator, Underwriter,
            Auditor.
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
            Premium
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            It is an amount of money paid by the account for the policy.
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
            Form
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            A form is a physical document detailing some aspect of the policy.
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
            Deductible
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            The amount of money that the insured must pay out of pocket for a
            loss.
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
            Declaration Sheet
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            An index or summary of all exposures, coverages and in some cases
            forms.
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
            Audit Transaction
          </Typography>

          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Updates the policy by adjusting estimated amounts with actual data.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PolicyCenter;
