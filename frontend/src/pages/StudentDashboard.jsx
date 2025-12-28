import DashboardLayout from "../components/DashboardLayout";
import StudentProfile from "../components/StudentProfile";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <DashboardLayout role="student">
      <StudentProfile user={user} />
    </DashboardLayout>
  );
}

export default StudentDashboard;
