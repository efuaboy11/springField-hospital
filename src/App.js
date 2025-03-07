import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/information/home";
import { CrisisResources } from "./pages/getHelp/crisisResources";
import { MentalHealthTreatment } from "./pages/getHelp/mentalHealthTreatment";
import { FindHelp } from "./pages/getHelp/findHelp";
import { FindWarmline } from "./pages/getHelp/findWarmline";
import { MentalHealthCondition } from "./pages/getInformation/mentalHealthCondition";
import { Depression } from "./pages/getInformation/variousMentalHealthCondition/depression";
import { Anxiety } from "./pages/getInformation/variousMentalHealthCondition/anxiety";
import { Bipolar } from "./pages/getInformation/variousMentalHealthCondition/bipolar";
import { PTSD } from "./pages/getInformation/variousMentalHealthCondition/PTSD";
import { Schizophrenia } from "./pages/getInformation/variousMentalHealthCondition/schizophrenia";
import { MoodDisorder } from "./pages/getInformation/variousMentalHealthCondition/moodDisorder";
import { PanicDisorder } from "./pages/getInformation/variousMentalHealthCondition/panicDisorder";
import { Psychosis } from "./pages/getInformation/variousMentalHealthCondition/Psychosis";
import { Suicide } from "./pages/getInformation/variousMentalHealthCondition/sucide";
import { WarningSign } from "./pages/getInformation/variousMentalHealthCondition/warningSign";
import { BIPOC } from "./pages/getInformation/variousMentalHealthCondition/BIPOC";
import { Youth } from "./pages/getInformation/variousMentalHealthCondition/youth";
import { OldAdult } from "./pages/getInformation/variousMentalHealthCondition/oldAdult";
import { CoDependency } from "./pages/getInformation/variousMentalHealthCondition/CoDependency";
import { InternetAddition } from "./pages/getInformation/variousMentalHealthCondition/internetAddition";
import { Marijuana } from "./pages/getInformation/variousMentalHealthCondition/Marijuana";
import { SexualAssault } from "./pages/getInformation/variousMentalHealthCondition/sexualAssault";




function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Get Help */}
            <Route path="/crisis-resources/" element={<CrisisResources />} />
            <Route path="/mental-health-treatment/" element={<MentalHealthTreatment />} />
            <Route path="/find-help/" element={<FindHelp />} />
            <Route path="/find-warmline/" element={<FindWarmline />} />
            {/* Get Information */}
            <Route path="/mental-health-condition/" element={<MentalHealthCondition />} />
            <Route path="/mental-health-condition/depression/" element={<Depression />} />
            <Route path="/mental-health-condition/anxiety/" element={<Anxiety />} />
            <Route path="/mental-health-condition/bipolar/" element={<Bipolar />} />
            <Route path="/mental-health-condition/PTSD/" element={<PTSD />} />
            <Route path="/mental-health-condition/Schizophrenia/" element={<Schizophrenia />} />
            <Route path="/mental-health-condition/mood-disorder/" element={<MoodDisorder />} />
            <Route path="/mental-health-condition/panic-disorder/" element={<PanicDisorder />} />
            <Route path="/mental-health-condition/psychosis/" element={<Psychosis />} />
            <Route path="/mental-health-condition/suicide/" element={<Suicide />} />
            <Route path="/mental-health-condition/warniing-signs/" element={<WarningSign />} />
            <Route path="/mental-health-condition/BIPOC/" element={<BIPOC />} />
            <Route path="/mental-health-condition/youth/" element={<Youth />} />
            <Route path="/mental-health-condition/old-adult/" element={<OldAdult />} />
            <Route path="/mental-health-condition/co-dependency/" element={<CoDependency />} />
            <Route path="/mental-health-condition/internet-addition/" element={<InternetAddition />} />
            <Route path="/mental-health-condition/marijuana/" element={<Marijuana />} />
            <Route path="/mental-health-condition/sexual-assault/" element={<SexualAssault />} />
          </Routes>

        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
