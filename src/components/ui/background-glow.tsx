import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BackgroundGlowProps {
  children?: ReactNode;
  className?: string;
}

export const BackgroundGlow = ({ children, className }: BackgroundGlowProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Soft Yellow Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-300/20 rounded-full blur-[120px]" />
      </div>

      {/* Your Content/Components */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundGlow;
