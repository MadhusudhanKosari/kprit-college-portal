function FacultyStudents({ students }) {
  return (
    <div className="card">
      <h3>Students</h3>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.roll} - {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyStudents;
