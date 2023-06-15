import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import weatherContext from "../../store/weather-context";

const Map = () => {
  const { lat, lon } = useContext(weatherContext);

  return (
    <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution="https://api.maptiler.com/maps/basic-v2/256/tiles.json?key=EkdghRekbwn2qFQMNkQ8"
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EkdghRekbwn2qFQMNkQ8"
      />
    </MapContainer>
  );
};

export default Map;
