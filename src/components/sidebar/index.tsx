import React from "react";
import AirPollutionCard from "./airPollution";
import type { Coords } from "@/schemas/weather.schema";
import clsx from "clsx";
import ChevronLeft from "@/assets/chevronLeft.svg?react";
import SidePanelSkeleton from "../skeletons/sidePanelSkeleton";

type Props = {
  coords: Coords;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidePanel = (props: Props) => {
  const { isSidePanelOpen, setIsSidePanelOpen } = props;

  return (
    <aside
      className={clsx(
        "bg-sidebar fixed top-0 right-0 z-1001 h-screen w-full md:w-(--sidebar-width)  overflow-y-scroll px-4 py-8 shadow-md transition-transform motion-safe:duration-300 motion-reduce:duration-[0ms] lg:translate-0!",
        isSidePanelOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <button className="lg:hidden" onClick={() => setIsSidePanelOpen(false)}>
        <ChevronLeft className="-ml-2 size-8 invert" />
      </button>
      <React.Suspense fallback={<SidePanelSkeleton />}>
        <AirPollutionCard {...props} />
      </React.Suspense>
    </aside>
  );
};

export default SidePanel;
