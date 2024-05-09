import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PolicyCenter from "./components/Base Data/PolicyCenter/PolicyCenter";
import ClaimCenter from "./components/Base Data/ClaimCenter/ClaimCenter";
import BillingData from "./components/Base Data/BillingCenter/BillingCenter";
import ResponsiveAppBar from "./components/common/ResponsiveHeader/ResponsiveAppBar";
import InsuranceInfo from "./components/Base Data/BasicInsuranceInfo/InsuranceInfo";
import HaveAQuery from "./components/common/ResponsiveHeader/HaveAQuery";
import Knowledge from "./components/Base Data/Advancement/Knowledge";

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/insuranceintroduction" element={<InsuranceInfo />} />
        <Route path="/claimcenter" element={<ClaimCenter />} />
        <Route path="/billingcenter" element={<BillingData />} />
        <Route path="/policycenter" element={<PolicyCenter />} />
        <Route path="/haveaquery" element={<HaveAQuery />} />
        <Route path="/advancements" element={<Knowledge />} />
      </Routes>
    </Router>
  );
};

export default App;
