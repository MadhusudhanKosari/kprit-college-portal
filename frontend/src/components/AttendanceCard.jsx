function AttendanceCard({ data }) {
  return (
    <div style={{ background: "#fff", padding: "15px" }}>
      <h3>Attendance</h3>
      <p>Total Classes: {data.total}</p>
      <p>Attended: {data.attended}</p>
      <p>Percentage: {data.percentage}</p>
    </div>
  );
}

export default AttendanceCard;
