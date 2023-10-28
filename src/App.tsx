import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Recommend from "./pages/Recommend";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import RecommendResult from "./pages/RecommendResult";
import SelectMethod from "./pages/SelectMethod";
import SelectRetro from "./pages/SelectRetro";
import StepByStepKPT from "./pages/WritingPage/StepByStep/KPT";
import CompleteWriting from "./pages/CompleteWriting";
import AttachPicture from "./pages/AttachPicture";
import GuideLineKPT from "./pages/WritingPage/GuideLine/KPT";
import GuideLineContiue from "./pages/WritingPage/GuideLine/Continue";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/recommendResult" element={<RecommendResult />} />
          <Route path="/selectMethod" element={<SelectMethod />} />
          <Route path="/selectRetro" element={<SelectRetro />} />
          <Route path="/stepByStepKPT" element={<StepByStepKPT />} />
          <Route path="/guideLineKPT" element={<GuideLineKPT />} />
          <Route path="/guideLineContinue" element={<GuideLineContiue />} />
          <Route path="/completeWriting" element={<CompleteWriting />} />
          <Route path="/attachPicture" element={<AttachPicture />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
