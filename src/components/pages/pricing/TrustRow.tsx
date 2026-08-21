import React from "react";
import { Check } from "lucide-react";

const TRUST_ITEMS = ["No setup fees", "Cancel anytime", "Secure payments"];

const TrustRow: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-7 flex-wrap mt-11 text-neutral-500 text-[13px] font-semibold trust-row">
      {TRUST_ITEMS.map((label) => (
        <span key={label} className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success-500 flex-shrink-0" />
          {label}
        </span>
      ))}
    </div>
  );
};

export default TrustRow;
