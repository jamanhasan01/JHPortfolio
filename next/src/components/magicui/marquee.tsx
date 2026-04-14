import { cn } from "@/lib/utils";
import { useMemo } from "react";
import PropTypes from 'prop-types'; // <-- Import PropTypes

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4, // <-- The prop causing the warning
  duration = 40,
  gap = "1rem",
  ...props
}) {
  const items = useMemo(
    () => Array(repeat).fill(0).map((_, i) => i),
    [repeat]
  );

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        "--duration": `${duration}s`,
        "--gap": gap,
      }}
    >
      {items.map((key) => (
        <div
          key={key}
          className={cn(
            "flex shrink-0 justify-around",
            {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            }
          )}
          style={{ gap }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

// --- Props Validation to fix the ESLint warning ---
Marquee.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  children: PropTypes.node,
  vertical: PropTypes.bool,
  // 🌟 This line validates the 'repeat' prop
  repeat: PropTypes.number, 
  duration: PropTypes.number,
  gap: PropTypes.string,
};
// -------------------------------------------------