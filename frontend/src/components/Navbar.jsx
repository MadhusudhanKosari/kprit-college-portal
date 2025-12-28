function Navbar({ role }) {
  return (
    <div style={{ background: "#222", padding: "10px", color: "white" }}>
      <h3>{role.toUpperCase()} DASHBOARD</h3>

      <button
        style={{ float: "right" }}
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

export default Navbar;
