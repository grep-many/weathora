import L from "leaflet";
import Marker from "@/assets/marker.png";

const customMarker = new L.Icon({
  iconUrl: Marker,
  iconSize: [64, 70],
  iconAnchor: [32, 64],
});

export default customMarker;
