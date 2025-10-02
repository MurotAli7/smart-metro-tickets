import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";

function Globus() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // 2000 ta random nuqta (Terra sun’iy yo‘ldoshi ma’lumotlariga o‘xshatib)
    const generated = Array.from({ length: 2000 }, () => {
      const lat = (Math.random() * 180 - 90).toFixed(2);   // -90 .. +90
      const lng = (Math.random() * 360 - 180).toFixed(2);  // -180 .. +180
      const temp = (Math.random() * 50 - 10).toFixed(1);   // -10 .. +40 °C

      let color = "white";
      if (temp >= 30) color = "red";          // issiq hudud
      else if (temp >= 15) color = "yellow";  // o‘rtacha
      else color = "blue";                    // sovuq hudud

      return {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        size: 0.5,
        color: color,
        label: `🌍 Terra ma'lumotlari\nHarorat: ${temp}°C`
      };
    });

    setPoints(generated);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", background: "black" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
       
      />
    </div>
  );
}

export default Globus;
