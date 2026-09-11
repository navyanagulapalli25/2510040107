function SensorCard({ icon, name, value, unit, status }) {
  return (
    <div className="sensor-card">
      <div className="sensor-icon">{icon}</div>

      <h2>{name}</h2>

      <div className="sensor-value">
        {value} <span>{unit}</span>
      </div>

      <div className="sensor-status">
        {status}
      </div>
    </div>
  );
}

export default SensorCard;