import React from "react";
import additionalLivingExpenses from "../../common/assets/Did You Know Images/Additional Expenses _ Heading.png";
import comprehensiveloss from "../../common/assets/Did You Know Headers/COMPREHENSIVE LOSS AND UNDERWRITER EXCHANGE.png";
import creditscore from "../../common/assets/Did You Know Headers/CREDIT SCORE INFLUENCE.png";
import cyber from "../../common/assets/Did You Know Headers/CYBER.png";
import dedandpre from "../../common/assets/Did You Know Headers/DEDUCTIBLES AND PREMIUMS - HOME OWNERS'.png";
import drone from "../../common/assets/Did You Know Headers/DRONE.png";
import exclusiuonsforho from "../../common/assets/Did You Know Headers/EXCLUSIONS FOR HOME OWNERS.png";
import federalandstate from "../../common/assets/Did You Know Headers/FEDERAL AND STATE.png";
import floodinsurance from "../../common/assets/Did You Know Headers/FLOOD INSURANCE.png";
import homebased from "../../common/assets/Did You Know Headers/HOME BASED BUSINESS COVERAGE.png";
import dentists from "../../common/assets/Did You Know Headers/INTERNATIONAL DENTISTS.png";
import naturaldisasters from "../../common/assets/Did You Know Headers/NATURAL DISASTERS AND COVERAGE.png";
import personalproperty from "../../common/assets/Did You Know Headers/PERSONAL PROPERTY.png";
import pools from "../../common/assets/Did You Know Headers/POOLS.png";
import riskmanagement from "../../common/assets/Did You Know Headers/RISK MANAGEMENT AND INSURANCE.png";
import sr22fr44 from "../../common/assets/Did You Know Headers/SR22,FR44.png";
import starbucks from "../../common/assets/Did You Know Headers/STAR BUCKS.png";
import tortlaw from "../../common/assets/Did You Know Headers/TORT LAW AND LIABILITY INSURANCE.png";
import valuableitems from "../../common/assets/Did You Know Headers/VALUABLE ITEMS COVERAGE.png";

import styles from "./KnowInfo.module.css";

const KnowInfo = () => {
  return (
    <div>
      <div className={styles.imagestyle}>
        <div>
          <img
            className={styles.divstyle}
            src={additionalLivingExpenses}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={comprehensiveloss}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={creditscore}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img className={styles.divstyle}
             src={cyber}
            alt=""
            srcset="" />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={valuableitems}
            alt=""
            srcset=""
          />
        </div>
      </div>

       <div className={styles.imagestyle}>
        <div>
          <img className={styles.divstyle}
            src={tortlaw}
            alt=""
            srcset="" />
        </div>
        <div>
          <img className={styles.divstyle}
            src={starbucks}
            alt=""
            srcset="" />
        </div>
        <div>
          <img className={styles.divstyle}
            src={sr22fr44}
            alt=""
            srcset="" />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={riskmanagement}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img className={styles.divstyle}
            src={pools}
            alt=""
            srcset="" />
        </div>
      </div>

      <div className={styles.imagestyle}>
        
        <div>
          <img
            className={styles.divstyle}
            src={personalproperty}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={personalproperty}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={naturaldisasters}
            alt=""
            srcset=""
          />
        </div>

        <div>
          <img className={styles.divstyle}
            src={dentists}
            alt=""
            srcset="" />
        </div>
        <div>
          <img className={styles.divstyle}
            src={homebased}
            alt=""
            srcset="" />
        </div>  
      </div>

      <div className={styles.imagestyle}>
        <div>
          <img
            className={styles.divstyle}
            src={federalandstate}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={floodinsurance}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            className={styles.divstyle}
            src={exclusiuonsforho}
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img className={styles.divstyle}
            src={drone}
            alt=""
            srcset="" />
        </div>
        <div>
          <img className={styles.divstyle}
            src={dedandpre}
            alt=""
            srcset="" />
        </div>
      </div> */}
    </div>
  );
};

export default KnowInfo;
