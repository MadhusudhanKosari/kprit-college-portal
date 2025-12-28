function MarksCard({ data }) {
  return (
    <div style={{ background: "#fff", padding: "15px" }}>
      <h3>Marks</h3>
      <p>Mid 1: {data.mid1}</p>
      <p>Mid 2: {data.mid2}</p>
      <p>Internal: {data.internal}</p>
    </div>
  );
}

export default MarksCard;
