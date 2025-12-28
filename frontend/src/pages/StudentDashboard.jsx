import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import StudentProfile from "../components/StudentProfile";
import AttendanceCard from "../components/AttendanceCard";
import MarksCard from "../components/MarksCard";
import NotificationCard from "../components/NotificationCard";

function StudentDashboard() {
  const [profile, setProfile] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [marks, setMarks] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/student/info")
      .then(res => res.json())
      .then(data => setProfile(data));

    fetch("http://localhost:5000/api/student/attendance")
      .then(res => res.json())
      .then(data => setAttendance(data));

    fetch("http://localhost:5000/api/student/marks")
      .then(res => res.json())
      .then(data => setMarks(data));

    fetch("http://localhost:5000/api/student/notifications")
      .then(res => res.json())
      .then(data => setNotifications(data));
  }, []);

  if (!profile || !attendance || !marks) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <DashboardLayout role="student">
      <StudentProfile user={profile} />
      <AttendanceCard data={attendance} />
      <MarksCard data={marks} />
      <NotificationCard notifications={notifications} />
    </DashboardLayout>
  );
}

export default StudentDashboard;
