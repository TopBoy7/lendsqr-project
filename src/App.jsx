import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
