// LocationMap.jsx
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export const LocationMap = ({ onLocationSelect }) => {
  const defaultPosition = [35.6892, 51.389]; // Tehran
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    onLocationSelect({ lat: defaultPosition[0], lng: defaultPosition[1] });
  }, []);

  const DraggableMarker = () => {
    const [draggable] = useState(true);

    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        onLocationSelect({ lat, lng });
      },
    });

    return (
      <Marker
        position={position}
        draggable={draggable}
        eventHandlers={{
          dragend(e) {
            const newPos = e.target.getLatLng();
            setPosition([newPos.lat, newPos.lng]);
            onLocationSelect({ lat: newPos.lat, lng: newPos.lng });
          },
        }}
        icon={markerIcon}
      />
    );
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DraggableMarker />
      </MapContainer>
    </div>
  );
};
