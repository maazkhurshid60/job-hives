import React from "react";
import Image from "next/image";
import clsx from "clsx";
import type { WorkerListing } from "@/constant/findWorkersData";

interface WorkerAvatarProps {
  worker: WorkerListing;
  size: number;
  className?: string;
}

const WorkerAvatar: React.FC<WorkerAvatarProps> = ({ worker, size, className }) => (
  <div
    className={clsx("relative rounded-full flex-shrink-0 overflow-hidden wc-avatar", className)}
    style={{ width: size, height: size, background: `linear-gradient(160deg, ${worker.avatarFrom}, ${worker.avatarTo})` }}
  >
    <Image src={worker.avatarUrl} alt={worker.name} fill sizes={`${size}px`} className="object-cover" />
  </div>
);

export default WorkerAvatar;
