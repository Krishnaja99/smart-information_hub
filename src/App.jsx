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
import Dashboard2 from "./components/Dashboard2/Dashboard2";
import InputFileUpload from "./components/Testing/FileUpload";
import TransactionInfo from "./components/Testing/TransactionInfo";

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Dashboard2 />} />
        <Route path="/insuranceintroduction" element={<InsuranceInfo />} />
        <Route path="/claimcenter" element={<ClaimCenter />} />
        <Route path="/billingcenter" element={<BillingData />} />
        <Route path="/policycenter" element={<PolicyCenter />} />
        <Route path="/haveaquery" element={<HaveAQuery />} />
        <Route path="/advancements" element={<Knowledge />} />
        <Route path="/fileupload" element={<InputFileUpload />} />
        <Route path="/transinfo" element={<TransactionInfo />} />
        {/* <Route path="/dash" element={<Dashboard2 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
