import { tilerApiKey } from "@/config";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import React from "react";
import { useMap } from "react-leaflet";

const MapTileLayer = () => {
  const map = useMap();
  React.useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: tilerApiKey,
    });
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
};

export default MapTileLayer;
