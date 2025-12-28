function StudentProfile({ user }) {
  return (
    <div style={{ background: "#fff", padding: "15px" }}>
      <h3>{user.name}</h3>
      <p>Roll: {user.roll}</p>
      <p>Department: {user.department}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default StudentProfile;
