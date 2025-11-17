import { Switch } from "./ui/switch";
import Sun from "@/assets/sun.svg?react";
import Moon from "@/assets/moon.svg?react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

type Props = {
  className?: string;
};

const ThemeToggle = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn("bg-background/30 flex items-center gap-2 rounded-full border p-2", className)}
    >
      <Sun className="size-5 dark:invert" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Moon className="size-5 dark:invert" />
    </div>
  );
};

export default ThemeToggle;
