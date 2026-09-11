import { useState, useEffect } from "react";
import SensorCard from "./SensorCard";
import "./App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLevel = Math.floor(Math.random() * 101);
      setWaterLevel(newLevel);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let waterStatus;

  if (waterLevel < 30) {
    waterStatus = "LOW";
  } else if (waterLevel <= 80) {
    waterStatus = "NORMAL";
  } else {
    waterStatus = "HIGH";
  }

  return (
    <div className="dashboard">
      <header>
        <h1>Sensor Monitoring Dashboard</h1>
        <p>Real-Time Environmental Sensor Grid</p>
      </header>

      <div className="sensor-grid">

        <SensorCard
          icon="🌡️"
          name="Temperature"
          value="28.5"
          unit="°C"
          status="NORMAL"
        />

        <SensorCard
          icon="💧"
          name="Water Level"
          value={waterLevel}
          unit="%"
          status={waterStatus}
        />

        <SensorCard
          icon="💨"
          name="Humidity"
          value="62"
          unit="%"
          status="NORMAL"
        />

      </div>
    </div>
  );
}

export default App;