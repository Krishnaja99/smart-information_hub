import React from "react";
import styles from "./Dashboard.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import introToInsurance from "../common/assets/CardView Images/what-is-insurance-meaning-and-benefits-of-insurance.jpg";
import policyImage from "../common/assets/CardView Images/Policy.jpg";
import BillingImage from "../common/assets/CardView Images/Billing.png";
import ClaimsImage from "../common/assets/CardView Images/claims.jpg";
import EnhancementsImage from "../common/assets/CardView Images/enhancements.jpg";
import DidYouKnow from "../common/assets/CardView Images/Did You Know.jpg";
import Header from "../common/Header/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Card>
        <Card className={styles.cards}>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={introToInsurance}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Line of Business
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                A line of business (LOB) is a set of information that is used to define a type of product offered by an insurer
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/insuranceintroduction">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={policyImage}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Policy
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                An insurance policy is a legal contract between the insurance
                company and the persons being insured
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/policycenter">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={ClaimsImage}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Claims
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                An insurance claim is a formal request by a policyholder to an
                insurance company for coverage or compensation for a covered
                loss or policy event.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/claimcenter">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Card>

        <Card className={styles.cards}>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={BillingImage}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Billing
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                Insurance is an arrangement in which you pay money to a company,
                and they pay money to you if something unpleasant happens to you
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/billingcenter">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={EnhancementsImage}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Advancements In Insurance
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/advancements">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="190"
              image={DidYouKnow}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Slab" }}
              >
                Did You Know ?
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                // target="_blank"
                href="/hierarchydemo"
                // href="https://outlook.office.com/mail/AAMkAGQ5YjA1ZDAxLTk5MGEtNDVjOS05Mjg4LTMwMmUxMjg5Zjg0MQAuAAAAAABXFX4yMsLeSaRtRrCHtDIAAQCSSImQg6nETZGMOO88aUkyAABhwwDuAAA%3D?sourceId=Raghu.Sama%40smartims.com&email=Raghu.Sama%40smartims.com"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Card>
      </Card>
    </div>
  );
};

export default Dashboard;
