import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
      role
    });

    // Save user data
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login successful");

    if (role === "student") window.location.href = "/student";
    if (role === "faculty") window.location.href = "/faculty";
    if (role === "parent") window.location.href = "/parent";

  } catch (err) {
    alert("Invalid credentials");
  }
};


  return (
    <div style={{ padding: 40 }}>
      <h2>KPRIT Login</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br /><br />

      <select onChange={e => setRole(e.target.value)}>
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
