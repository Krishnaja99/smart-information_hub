import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./Dashboard2.module.css";
import Typography from "@mui/material/Typography";
import PolicyIcon from "@mui/icons-material/Ballot";
import InsuranceIcon from "@mui/icons-material/Policy";
import ClaimsIcon from "@mui/icons-material/EditNote";
import BillingIcon from "@mui/icons-material/Sell";
import CampaignIcon from "@mui/icons-material/Campaign";
import Header from "../common/Header/Header";
import { Link } from "react-router-dom";

const Dashboard2 = () => {
  return (
    <div>
      <Header />
      <div className={styles.cardPresentation}>
        <div className={styles.upperCardsView}>
          <Card
            className={styles.cardStyle}
            sx={{ border: "2px solid #ccc", textDecoration: "none" }}
            component={Link}
            to="/insuranceintroduction"
          >
            <InsuranceIcon
              className={styles.cardIconView}
              sx={{ fontSize: "80px" }}
            />
            <CardContent>
              <Typography
                className={styles.fontHeading}
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab", fontWeight: "bold" }}
              >
                Insurance
              </Typography>
              <Typography
                className={styles.definitionFormat}
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                Insurance is a contract that transfers the risk of something bad
                happening to an insurance company, in exchange for financial
                protection or reimbursement.
              </Typography>
            </CardContent>
          </Card>

          <Card
            className={styles.cardStyle}
            sx={{ border: "2px solid #ccc", textDecoration: "none" }}
            component={Link}
            to="/policycenter"
          >
            <PolicyIcon
              className={styles.cardIconView}
              sx={{ fontSize: "80px" }}
            />
            <CardContent>
              <Typography
                className={styles.fontHeading}
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Policy Center
              </Typography>
              <Typography
                className={styles.definitionFormat}
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                An insurance policy is a legal contract between the insurance
                company and the persons being insured
              </Typography>
            </CardContent>
          </Card>

          <Card
            className={styles.cardStyle}
            sx={{ border: "2px solid #ccc", textDecoration: "none" }}
            component={Link}
            to="/claimcenter"
          >
            <ClaimsIcon
              className={styles.cardIconView}
              sx={{ fontSize: "80px" }}
            />
            <CardContent>
              <Typography
                className={styles.fontHeading}
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Claim Center
              </Typography>
              <Typography
                className={styles.definitionFormat}
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                An insurance claim is a formal request by a policyholder to an
                insurance company for coverage or compensation for a covered
                loss or policy event.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={styles.bottomCardsView}>
          <Card
            className={styles.cardStyle}
            sx={{ border: "2px solid #ccc", textDecoration: "none" }}
            component={Link}
            to="/billingcenter"
          >
            <BillingIcon
              className={styles.cardIconView}
              sx={{ fontSize: "80px" }}
            />
            <CardContent>
              <Typography
                className={styles.fontHeading}
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Billing Center
              </Typography>
              <Typography
                className={styles.definitionFormat}
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                Insurance is an arrangement in which you pay money to a company,
                and they pay money to you if something unpleasant happens to you
              </Typography>
            </CardContent>
          </Card>

          <Card
            className={styles.cardStyle}
            sx={{ border: "2px solid #ccc", textDecoration: "none" }}
            component={Link}
            to="/insuranceintroduction"
          >
            <CampaignIcon
              className={styles.cardIconView}
              sx={{ fontSize: "80px" }}
            />
            <CardContent>
              <Typography
                className={styles.fontHeading}
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Did you Know?
              </Typography>
              <Typography
                className={styles.definitionFormat}
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                Insurance is a contract that transfers the risk of something bad
                happening to an insurance company.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
