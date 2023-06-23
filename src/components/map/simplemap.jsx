
import { MapContainer, TileLayer, useMap, Marker,Popup } from "react-leaflet";
//import "./leaflet.css";
import "leaflet/dist/leaflet.css";




const SimpleMapWrapper = () => {
	const position = [51.505, -0.09];
  return(
		
		
		
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default SimpleMapWrapper;
// const SimpleMapWrapper = () => {

// 	const center = [52.22977, 21.01178];
//   const tileLayer = {
//     attribution:
//       '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//     url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//   };

// 	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution:
//       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);


// 	return (
//     <MapContainer center={center} zoom={12} scrollWheelZoom={true}>
//       <TileLayer {...tileLayer} />
//     </MapContainer>
//   );
// };





