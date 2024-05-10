import React from "react";
import styles from "../../Utils/Page Styles/Basedata.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InsuranceInfo = () => {
  return (
    <div>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Insurance
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Insurance is a means of protection from financial loss in which, in
            exchange for a fee, a party agrees to compensate another party in
            the event of a certain loss, damage, or injury. It is a form of risk
            management, primarily used to protect against the risk of a
            contingent or uncertain loss.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "140px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Business Owners
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            A business owner policy (BOP) combines protection for all major
            property and liability risks in one insurance package. This type of
            policy assembles the basic coverages required by a business owner in
            one bundle. However, it is usually sold at a premium that is less
            than the total cost of the individual coverages.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Commercial Property
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Commercial Property Insurance covers your Business’s Real Estate and
            its Contents. It helps pay for Repair or Replacement when Business
            Property is Lost, Damaged, or Destroyed.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "140px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            General Liability
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            General liability insurance provides coverage for common liability
            claims from third parties (people outside your business). This
            business insurance policy covers legal defense costs if someone sues
            over a bodily injury, property damage, or advertising injury. Your
            policy can pay for everything from hiring a lawyer to court-ordered
            judgments and settlements. General liability insurance covers common
            business risks like customer injury, customer property damage, and
            advertising injury. It protects your small business from the high
            costs of lawsuits and helps you qualify for leases and contracts.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Home Owners
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Homeowners insurance provides protection against the financial
            consequences of losses related to owning and renting a home. It is a
            combination of property and liability coverages.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Inland Marine
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Inland marine insurance protects your business property when it’s in
            transit or stored at a site other than your main business location.
            OR It covers any property that is movable, transportable, or
            involved in transferring information.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Personal Auto
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Personal Auto Insurance covers accidents that occur while you’re
            driving your vehicle for personal use. That includes commuting to
            and from work and travel unrelated to your job duties. Policies
            typically insure the owner of the vehicle and one or two immediate
            family members.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Commercial Auto
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            Commercial Auto Insurance costs more than personal auto insurance.
            That's because commercial policies tend to have higher limits, which
            means more coverage in the event of an accident.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={styles.definitionCard}
        sx={{ height: "130px", maxWidth: 1200, border: "3px solid #ccc" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Roboto Slab" }}
          >
            Workers Compensation
          </Typography>
          <Typography sx={{ fontFamily: "Roboto Slab", fontSize: "18px" }}>
            The Workmen's Compensation policy provides payment for legal
            compensation to Employees or their dependents in case of injury and
            accident of the employees at workplace (including certain
            occupational disease) arising out of and in the course of employment
            and resulting in disablement or death.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsuranceInfo;
