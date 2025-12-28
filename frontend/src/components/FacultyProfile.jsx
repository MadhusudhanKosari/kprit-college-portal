function FacultyProfile({ profile }) {
  return (
    <div className="card">
      <h3>{profile.name}</h3>
      <p><b>Department:</b> {profile.department}</p>
      <p><b>Designation:</b> {profile.designation}</p>
      <p><b>Email:</b> {profile.email}</p>
    </div>
  );
}

export default FacultyProfile;
