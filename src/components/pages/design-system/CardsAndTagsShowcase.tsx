import React from "react";
import { Sparkles, Users } from "lucide-react";

const CardsAndTagsShowcase: React.FC = () => (
  <div className="flex flex-col gap-lg">
    <div className="flex flex-wrap gap-md">
      <div className="w-[240px] bg-neutral-0 border border-solid border-neutral-200 rounded-2xl p-md shadow-sm">
        <span className="inline-flex items-center gap-1 text-caption font-bold text-warning-700 bg-warning-50 rounded-full px-2.5 py-1 mb-sm">
          <Sparkles className="w-3 h-3" /> Featured
        </span>
        <h4 className="font-heading font-bold text-heading-sm text-neutral-900 mb-1">Card title</h4>
        <p className="text-body-sm text-neutral-600 mb-sm">Standard content card — border, radius, and shadow tokens from the base scale.</p>
        <div className="flex items-center gap-1 text-caption text-neutral-500">
          <Users className="w-3 h-3" /> 42 applicants
        </div>
      </div>

      <div className="w-[240px] bg-primary-50 border-2 border-solid border-warning-400 rounded-2xl p-md shadow-sm">
        <h4 className="font-heading font-bold text-heading-sm text-neutral-900 mb-1">Accent card</h4>
        <p className="text-body-sm text-neutral-700">Colored background variant, same radius/shadow tokens.</p>
      </div>
    </div>

    <div>
      <h4 className="font-body font-bold text-body-sm text-neutral-700 uppercase tracking-wider mb-sm">Tags</h4>
      <div className="flex flex-wrap gap-2">
        <span className="text-caption font-semibold text-primary-700 bg-primary-50 rounded-full px-2.5 py-1">Primary</span>
        <span className="text-caption font-semibold text-neutral-700 bg-neutral-100 rounded-full px-2.5 py-1">Neutral</span>
        <span className="text-caption font-semibold text-success-600 bg-success-50 rounded-full px-2.5 py-1">Success</span>
        <span className="text-caption font-semibold text-warning-600 bg-warning-50 rounded-full px-2.5 py-1">Warning</span>
        <span className="text-caption font-semibold text-danger-600 bg-danger-50 rounded-full px-2.5 py-1">Danger</span>
      </div>
    </div>
  </div>
);

export default CardsAndTagsShowcase;
