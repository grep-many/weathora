import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "@/schemas/weather.schema";
import { tilerApiKey, weatherMap } from "@/config";
import React from "react";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  layer: string;
};

const Map = ({ coords, onMapClick, layer }: Props) => {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={13}
      style={{ width: "100%", height: "100%" }} //todo: if this does not work out fallback to 500px height
    >
      <MapClick coords={coords} onMapClick={onMapClick} />
      <MapTileLayer/>
      <TileLayer
        opacity={0.7}
        url={weatherMap(layer)}
      />
      <Marker position={[coords.lat, coords.lon]}/>
    </MapContainer>
  );
};

const MapClick = ({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
}) => {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);
  map.on("click", ({ latlng: { lat, lng } }) => {
    onMapClick(lat, lng);
  });
  return null;
};

const MapTileLayer = () => {
  const map = useMap();
  React.useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: tilerApiKey,
    });
    tileLayer.addTo(map);

    return () => {map.removeLayer(tileLayer)};
  }, [map]);

  return null;
};

export default Map;
