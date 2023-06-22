import { MapContainer, TileLayer } from "react-leaflet";
import tileLayer from "./tileLayer";

const center = [52.22977, 21.01178];

const SimpleMapWrapper = () => {
  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom={true}>
      <TileLayer {...tileLayer} />
    </MapContainer>
  );
};

export default SimpleMapWrapper;

