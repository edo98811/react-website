
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home_page";  // Your main page
import CVPage from "./Pages/CV/curriculum_page"; // Your new CV page

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Main page */}
        <Route path="/cv" element={<CVPage />} />  {/* CV Page */}
      </Routes>
    </Router>
  );
}