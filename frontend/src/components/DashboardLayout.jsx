import Sidebar from "./Sidebar";

function DashboardLayout({ children, role }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar role={role} />
      <div style={{ flex: 1, padding: "20px", background: "#f4f6f9" }}>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
