import React from "react";
import AirPollutionCard from "./airPollution";
import ChevronLeft from "@/assets/chevronLeft.svg?react";
import SidePanelSkeleton from "../skeletons/sidePanelSkeleton";
import ThemeToggle from "../themeToggle";
import { cn } from "@/lib/utils";

type Props = {
  coords: Coords;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidePanel = (props: Props) => {
  const { isSidePanelOpen, setIsSidePanelOpen } = props;

  return (
    <aside
      className={cn(
        "bg-sidebar fixed top-0 right-0 z-1001 h-screen w-full overflow-y-scroll px-4 py-8 shadow-md transition-transform motion-safe:duration-300 motion-reduce:duration-[0ms] md:w-(--sidebar-width) lg:translate-0!",
        isSidePanelOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <button
          className="bg-background/30 hover:bg-background/20 active:bg-background/40 rounded-full border p-1 lg:hidden"
          onClick={() => setIsSidePanelOpen(false)}
        >
          <ChevronLeft className="size-8 dark:invert" />
        </button>
        <ThemeToggle className="top-10 right-4 lg:absolute" />
      </div>
      <React.Suspense fallback={<SidePanelSkeleton />}>
        <AirPollutionCard {...props} />
      </React.Suspense>
    </aside>
  );
};

export default SidePanel;
