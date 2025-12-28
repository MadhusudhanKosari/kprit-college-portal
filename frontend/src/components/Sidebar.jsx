function Sidebar({ role }) {
  return (
    <div style={{
      width: "220px",
      background: "#1f2933",
      color: "white",
      padding: "20px"
    }}>
      <h3>{role.toUpperCase()}</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Notifications</li>
        <li>Settings</li>
      </ul>

      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
