import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/information/home";
import { CrisisResources } from "./pages/getHelp/crisisResources";
import { MentalHealthTreatment } from "./pages/getHelp/mentalHealthTreatment";
import { FindHelp } from "./pages/getHelp/findHelp";
import { FindWarmline } from "./pages/getHelp/findWarmline";




function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crisis-resources/" element={<CrisisResources />} />
            <Route path="/mental-health-treatment/" element={<MentalHealthTreatment />} />
            <Route path="/find-help/" element={<FindHelp />} />
            <Route path="/find-warmline/" element={<FindWarmline />} />
          </Routes>

        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
