import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import ResponsiveAppBar from "../../../src/";

import introToInsurance from "../common/assets/CardView Images/what-is-insurance-meaning-and-benefits-of-insurance.jpg";
import policyImage from "../common/assets/CardView Images/Policy.jpg";
import BillingImage from "../common/assets/CardView Images/Billing.png";
import ClaimsImage from "../common/assets/CardView Images/claims.jpg";
import EnhancementsImage from "../common/assets/CardView Images/enhancements.jpg";
import DidYouKnow from "../common/assets/CardView Images/Did You Know.jpg";

const Dashboard = () => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}

      {/* Add spacing below the header */}
      <Box sx={{ paddingTop: "60px", paddingX: "20px" }}>
        {/* Row 1 */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginBottom: "40px" }}>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia component="img" height="190" image={introToInsurance} alt="Intro to Insurance" />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
                Line of Business
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
                A line of business (LOB) is a set of information that is used to define a type of product offered by an insurer
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/insuranceintroduction">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia component="img" height="190" image={policyImage} alt="Policy" />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
                Policy
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
                An insurance policy is a legal contract between the insurance company and the persons being insured
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/policycenter">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia component="img" height="190" image={ClaimsImage} alt="Claims" />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
                Claims
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
                An insurance claim is a formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/claimcenter">Learn More</Button>
            </CardActions>
          </Card>
        </Box>

        {/* Row 2 */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia component="img" height="190" image={BillingImage} alt="Billing" />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
                Billing
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
                Insurance is an arrangement in which you pay money to a company, and they pay money to you if something unpleasant happens to you
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/billingcenter">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia component="img" height="190" image={EnhancementsImage} alt="Advancements" />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
                Advancements In Insurance
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/advancements">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 395, border: "3px solid #ccc" }}>
            <CardMedia component="img" height="190" image={DidYouKnow} alt="Did You Know" />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "Roboto Slab" }}>
                Did You Know ?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
                Some insurance policies cover unique situations. "Click to uncover surprising facts!"
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" href="/didyouknow">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
