import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// interface IProps {
//   geolocation: {
//     lat: number,
//     lng: number,
//   };
// }
export default function Leaflet({ markers }) {
  return (
    <MapContainer
      className="h-96"
      center={[markers[0].lat, markers[0].lng]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]}></Marker>
      ))}
    </MapContainer>
  );
}
