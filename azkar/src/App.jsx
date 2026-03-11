import Home from "./pages/Home";
import AzkarDetail from "./components/AzkarDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HighContrastProvider } from "./context/HighContrastContext";

import "./App.css";

function App() {
  return (
    <HighContrastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<AzkarDetail />} />
        </Routes>
      </Router>
    </HighContrastProvider>
  );
}

export default App;
