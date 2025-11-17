import MapLegend from "./legend";
import MapConfig from "./mapConfig";

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  layer: string;
};

const Map = ({ coords, onMapClick, layer }: Props) => (
  <section className="relative order-1 col-span-1 h-[55vh] md:col-span-2 md:h-[70vh] 2xl:col-span-4 2xl:row-span-2 2xl:h-auto">
    <MapConfig coords={coords} onMapClick={onMapClick} layer={layer} />
    <MapLegend mapType={layer} />
  </section>
);

export default Map;
