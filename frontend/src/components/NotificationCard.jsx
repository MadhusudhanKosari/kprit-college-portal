function NotificationCard({ notifications }) {
  return (
    <div style={{ background: "#fff", padding: "15px", marginTop: "15px" }}>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationCard;
