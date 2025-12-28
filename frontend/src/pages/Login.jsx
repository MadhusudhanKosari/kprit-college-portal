import "../styles/login.css";
import TopBar from "../components/TopBar";
import Banner from "../components/Banner";
import LoginCard from "../components/LoginCard";

function Login() {
  return (
    <>
      <TopBar />
      <Banner />

      <div className="login-container">
        <LoginCard title="Employee Login" role="faculty" />
        <LoginCard title="Student Login" role="student" />
        <LoginCard title="Parent Login" role="parent" />
      </div>
    </>
  );
}

export default Login;
