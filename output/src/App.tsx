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
import CompleteWriting from "./pages/CompleteWriting";
import StepByStepKPT from "./pages/WritingPage/StepByStep/KPT";
import StepByStepContinue from "./pages/WritingPage/StepByStep/Continue";
import StepByStepTIL from "./pages/WritingPage/StepByStep/TIL";
import StepByStepYWT from "./pages/WritingPage/StepByStep/YWT";
import StepByStepFourL from "./pages/WritingPage/StepByStep/FourL";
import StepByStepAAR from "./pages/WritingPage/StepByStep/AAR";
import StepByStepORID from "./pages/WritingPage/StepByStep/ORID";
import StepByStepFiveF from "./pages/WritingPage/StepByStep/FiveF";
import StepByStepPersonal from "./pages/WritingPage/StepByStep/Personal";
import StepByStepPerformance from "./pages/WritingPage/StepByStep/Performance";
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

          {/* stepByStep */}
          <Route path="/stepByStepKPT" element={<StepByStepKPT />} />
          <Route path="/stepByStepContinue" element={<StepByStepContinue />} />
          <Route path="/stepByStepTIL" element={<StepByStepTIL />} />
          <Route path="/stepByStepYWT" element={<StepByStepYWT />} />
          <Route path="/stepByStepFourL" element={<StepByStepFourL />} />
          <Route path="/stepByStepAAR" element={<StepByStepAAR />} />
          <Route path="/stepByStepORID" element={<StepByStepORID />} />
          <Route path="/stepByStepFiveF" element={<StepByStepFiveF />} />
          <Route path="/stepByStepPersonal" element={<StepByStepPersonal />} />
          <Route
            path="/stepByStepPerformance"
            element={<StepByStepPerformance />}
          />

          {/* guideLine */}
          <Route path="/guideLineKPT" element={<GuideLineKPT />} />
          <Route path="/guideLineContinue" element={<GuideLineContiue />} />

          <Route path="/attachPicture" element={<AttachPicture />} />
          <Route path="/completeWriting" element={<CompleteWriting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;