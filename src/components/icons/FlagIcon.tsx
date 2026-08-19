import React from "react";
import { Globe } from "lucide-react";
import * as Flags from "country-flag-icons/react/3x2";

interface FlagIconProps {
  /** ISO 3166-1 alpha-2 country code, e.g. "US". Null renders a globe icon for remote/global roles. */
  countryCode: string | null;
  className?: string;
}

// SVG flags render consistently everywhere — unicode flag emoji silently fail to draw as flags
// on several Windows font configurations, showing letters or nothing instead.
const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, className = "w-4 h-3" }) => {
  if (!countryCode) return <Globe className={className} />;

  const Flag = (Flags as Record<string, React.ComponentType<{ className?: string; title?: string }>>)[countryCode];
  if (!Flag) return <Globe className={className} />;

  return <Flag className={`${className} rounded-[2px] flex-shrink-0`} title={countryCode} />;
};

export default FlagIcon;
