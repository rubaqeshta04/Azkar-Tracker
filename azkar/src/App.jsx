import Home from "./pages/Home";
import AzkarDetail from "./components/AzkarDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<AzkarDetail />} />
      </Routes>
    </Router>

  );
}

export default App;
