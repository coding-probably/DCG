import React, { useEffect } from "react";
import L from "leaflet"; // Import Leaflet library
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map when the component mounts
    const map = L.map('map', {
      center: [28.632832197203708, 77.22007038867214], // Set initial map center
      zoom: 17, // Set zoom level
    });

    // Set the tile layer (OpenStreetMap in this case)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    L.marker([28.632832197203708, 77.22007038867214]).addTo(map)
      .bindPopup('<b>BIN-001</b><br />')
      .openPopup();

    // Clean up the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{ height: "100%", width: "100%" }} // Set the map height and width
    ></div>
  );
};

export default MapComponent;
