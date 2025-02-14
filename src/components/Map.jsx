import { useState, useEffect } from "react";
import axios from "axios";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "AIzaSyBM_Q2dA0Nbxa19lZ5Otw8Qi1Efm0ed3pE";
  const ipGeoApiKey = "159234c99fb545ada50544206108bb6b";

  const fetchDefaultLocation = async () => {
    try {
      const defaultLatitude = 10.611094064898788;
      const defaultLongitude = 122.93151727050274;
      setLocation(`${defaultLatitude},${defaultLongitude}`);

      const response = await axios.get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${ipGeoApiKey}`
      );

      return response.data;
    } catch (err) {
      setError("Failed to load map data.", err);
    }
  };

  useEffect(() => {
    fetchDefaultLocation();
  }, []);

  return (
    <div className="Map">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {location && (
        <div style={{ textAlign: "center" }}>
          <iframe
            width="1000"
            height="500"
            style={{ border: "0", borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
              location
            )}&key=${apiKey}`}
          ></iframe>
        </div>
      )}
    </div>
  );
}
