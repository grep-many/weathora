import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "@/schemas/weather.schema";

type Props = {
  coords: Coords;
  onMapClick:(lat:number,lon:number)=>void
};

const Map = ({ coords,onMapClick }: Props) => {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={13}
      style={{ width: "100vw", height: "500px" }}
    >
      <MapClick onMapClick={onMapClick}/>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coords.lat, coords.lon]}>
        <Popup>
          <p>
            A pretty CSS3 popup. <br /> Easily customizable.
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const MapClick = ({ onMapClick }: { onMapClick: (lat: number, lon: number) => void }) => {
  const map = useMap();
  map.on("click", ({ latlng }) => {
    onMapClick(latlng.lat, latlng.lng);
    map.panTo([latlng.lat, latlng.lng]);
  });
  return null;
};

export default Map;
