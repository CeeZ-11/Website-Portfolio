import { useState, useEffect } from "react";

import axios from "axios";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const ipGeoApiKey = import.meta.env.VITE_IP_GEO_API_KEY;

  const fetchDefaultLocation = async () => {
    try {
      const defaultLatitude = 10.6761;
      const defaultLongitude = 122.9511;

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
            width="1250"
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
