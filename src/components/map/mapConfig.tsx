import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { weatherMap } from "@/config";
import MapClick from "./mapClick";
import MapTileLayer from "./mapTileLayer";
import customMarker from "./customMarker";

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  layer: string;
};

const MapConfig = ({ coords, onMapClick, layer }: Props) => {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <MapClick coords={coords} onMapClick={onMapClick} />
      <MapTileLayer />
      <TileLayer opacity={0.7} url={weatherMap(layer)} />
      <Marker position={[coords.lat, coords.lon]} icon={customMarker} />
    </MapContainer>
  );
};

export default MapConfig;
