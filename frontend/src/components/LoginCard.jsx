import { useState } from "react";
import axios from "axios";

function LoginCard({ title, role }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: username,
        password: password,
        role: role,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (role === "student") window.location.href = "/student";
      if (role === "faculty") window.location.href = "/faculty";
      if (role === "parent") window.location.href = "/parent";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-card">
      <h3>{title}</h3>

      <input
        placeholder={role === "parent" ? "Roll No" : "Username"}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
}

export default LoginCard;
