function StudentProfile({ user }) {
  return (
    <div style={{ padding: "20px", background: "#fff", borderRadius: "8px" }}>
      <h3>Student Profile</h3>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Roll:</b> {user.roll}</p>
      <p><b>Department:</b> CSE</p>
    </div>
  );
}

export default StudentProfile;
