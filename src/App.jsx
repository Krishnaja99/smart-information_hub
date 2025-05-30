import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PolicyCenter from "./components/Base Data/PolicyCenter/PolicyCenter";
import ClaimCenter from "./components/Base Data/ClaimCenter/ClaimCenter";
import BillingData from "./components/Base Data/BillingCenter/BillingCenter";
import ResponsiveAppBar from "./components/common/ResponsiveHeader/ResponsiveAppBar";
import InsuranceInfo from "./components/Base Data/BasicInsuranceInfo/InsuranceInfo";
import KnowInfo from "./components/Base Data/DidYouKnow/KnowInfo";
import HaveAQuery from "./components/common/ResponsiveHeader/HaveAQuery";
import Knowledge from "./components/Base Data/Advancement/Knowledge";
// import cardinfo from "./components/Base Data/BillingCenter/CardInfo";
// import Dashboard2 from "./components/Dashboard2/Dashboard2";
import InputFileUpload from "./components/Testing/FileUpload";
import TransactionInfo from "./components/Testing/TransactionInfo";
import InsuranceTablePage from "./components/common/Header/InsuranceTable";

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        {/* <Route path="/" element={<Dashboard2 />} /> */}
        <Route path="/insuranceintroduction" element={<InsuranceInfo />} />
        <Route path="/claimcenter" element={<ClaimCenter />} />
        <Route path="/billingcenter" element={<BillingData />} />
        <Route path="/policycenter" element={<PolicyCenter />} />
        <Route path="/haveaquery" element={<HaveAQuery />} />
        <Route path="/advancements" element={<Knowledge />} />
        <Route path="/fileupload" element={<InputFileUpload />} />
        <Route path="/insurance-table" element={<InsuranceTablePage />} />
        <Route path="/transinfo" element={<TransactionInfo />} />
        <Route path="/didyouknow" element={<KnowInfo />} />
        {/* <Route path="/cardinfo" element={<CardInfo />} /> */}
         <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
