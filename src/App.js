import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/information/home";
import { CrisisResources } from "./pages/getHelp/crisisResources";
import { MentalHealthTreatment } from "./pages/getHelp/mentalHealthTreatment";




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
          </Routes>

        </AuthProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
