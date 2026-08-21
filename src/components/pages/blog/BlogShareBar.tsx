"use client";

import React, { useState } from "react";
import { Link2, Check } from "lucide-react";
import { FacebookIcon, XIcon } from "@/components/icons/SocialIcons";

const shareBtnClass =
  "w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 transition-colors duration-150 hover:bg-primary-100 hover:text-primary-600";

const BlogShareBar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — silently no-op
    }
  };

  return (
    <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-5 flex items-center justify-between flex-wrap gap-4 share-bar shadow-sm">
      <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-500">Share this article</h4>
      <div className="flex items-center gap-2">
        <button type="button" onClick={handleCopyLink} aria-label="Copy link" className={shareBtnClass}>
          {copied ? <Check className="w-4 h-4 text-success-600" /> : <Link2 className="w-4 h-4" />}
        </button>
        <a href="#" aria-label="Share on X" className={shareBtnClass}>
          <XIcon className="w-4 h-4" />
        </a>
        <a href="#" aria-label="Share on Facebook" className={shareBtnClass}>
          <FacebookIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogShareBar;
