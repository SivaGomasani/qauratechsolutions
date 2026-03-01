import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Qaura from "./pages/Qaura";
import TermsAndConditions from "./pages/TermsAndConditons";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refund from "./pages/Refund";
import Cancel from "./pages/Cancel";
import Cookies from "./pages/Cookies";
import Disclaimer from "./pages/Disclaimer";
import SolutionsHub from "./pages/SolutionsHub";
import Portfolios from "./Services/Portfolios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Qaura />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* Services Parent Route */}
        <Route path="/services" element={<SolutionsHub />}></Route>
          <Route path="/services/portfolios" element={<Portfolios />} />

      </Routes>
    </Router>
  );
}

export default App;