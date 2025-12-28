function FacultySubjects({ subjects }) {
  return (
    <div className="card">
      <h3>Subjects Handled</h3>
      <ul>
        {subjects.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default FacultySubjects;
