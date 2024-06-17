import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./ins.module.css";

const insuranceDefinitions = [
  { 
    title: "Insurance", 
    description: "Insurance is a means of protection from financial loss in which, in exchange for a fee, a party agrees to compensate another party in the event of a certain loss, damage, or injury. It is a form of risk management, primarily used to protect against the risk of a contingent or uncertain loss." 
  },
  { 
    title: "Business Owners", 
    description: "A business owner policy (BOP) combines protection for all major property and liability risks in one insurance package. This type of policy assembles the basic coverages required by a business owner in one bundle. However, it is usually sold at a premium that is less than the total cost of the individual coverages." 
  },
  { 
    title: "Commercial Property", 
    description: "Commercial Property Insurance covers your Business’s Real Estate and its Contents. It helps pay for Repair or Replacement when Business Property is Lost, Damaged, or Destroyed." 
  },
  { 
    title: "General Liability", 
    description: "General liability insurance provides coverage for common liability claims from third parties (people outside your business). This business insurance policy covers legal defense costs if someone sues over a bodily injury, property damage, or advertising injury. Your policy can pay for everything from hiring a lawyer to court-ordered judgments and settlements. General liability insurance covers common business risks like customer injury, customer property damage, and advertising injury. It protects your small business from the high costs of lawsuits and helps you qualify for leases and contracts." 
  },
  { 
    title: "Home Owners", 
    description: "Homeowners insurance provides protection against the financial consequences of losses related to owning and renting a home. It is a combination of property and liability coverages." 
  },
  { 
    title: "Inland Marine", 
    description: "Inland marine insurance protects your business property when it’s in transit or stored at a site other than your main business location. OR It covers any property that is movable, transportable, or involved in transferring information." 
  },
  { 
    title: "Personal Auto", 
    description: "Personal Auto Insurance covers accidents that occur while you’re driving your vehicle for personal use. That includes commuting to and from work and travel unrelated to your job duties. Policies typically insure the owner of the vehicle and one or two immediate family members." 
  },
  { 
    title: "Commercial Auto", 
    description: "Commercial Auto Insurance costs more than personal auto insurance. That's because commercial policies tend to have higher limits, which means more coverage in the event of an accident." 
  },
  { 
    title: "Workers Compensation", 
    description: "The Workmen's Compensation policy provides payment for legal compensation to Employees or their dependents in case of injury and accident of the employees at workplace (including certain occupational disease) arising out of and in the course of employment and resulting in disablement or death." 
  }
];

const InsuranceInfo = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.definitionsContainer}>
        {insuranceDefinitions.map((def, index) => (
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

export default InsuranceInfo;
