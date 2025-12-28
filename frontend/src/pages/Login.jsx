import { useState } from "react";

function Login() {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) return alert("Select a role");
    window.location.href = `/${role}`;
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>KPRIT College Portal</h1>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="parent">Parent</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
