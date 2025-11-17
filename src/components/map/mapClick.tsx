import { useMap } from "react-leaflet";

type Props = {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
};

const MapClick = ({ onMapClick, coords }: Props) => {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);
  map.on("click", ({ latlng: { lat, lng } }) => {
    onMapClick(lat, lng);
  });
  return null;
};

export default MapClick;
