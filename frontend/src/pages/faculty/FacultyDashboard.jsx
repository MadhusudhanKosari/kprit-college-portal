import { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import FacultyProfile from "../../components/FacultyProfile";
import FacultySubjects from "../../components/FacultySubjects";
import FacultyStudents from "../../components/FacultyStudents";

function FacultyDashboard() {
  const [profile, setProfile] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/faculty/profile")
      .then(res => res.json())
      .then(data => setProfile(data));

    fetch("http://localhost:5000/api/faculty/subjects")
      .then(res => res.json())
      .then(data => setSubjects(data));

    fetch("http://localhost:5000/api/faculty/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <DashboardLayout role="faculty">
      <FacultyProfile profile={profile} />
      <FacultySubjects subjects={subjects} />
      <FacultyStudents students={students} />
    </DashboardLayout>
  );
}

export default FacultyDashboard;
