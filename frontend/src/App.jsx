import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import ParentDashboard from "./pages/ParentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
