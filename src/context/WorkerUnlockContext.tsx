"use client";

import React, { createContext, useContext, useState } from "react";

interface WorkerUnlockContextType {
  unlocked: boolean;
  toggle: () => void;
}

const WorkerUnlockContext = createContext<WorkerUnlockContextType | undefined>(undefined);

// Demo-only: previews the "employer with an active unlock" state across every worker card and
// profile on the page. A real build enforces this server-side (subscription + unlock credits),
// never just in the UI — this toggle exists purely because there's no auth/billing backend yet.
export const WorkerUnlockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unlocked, setUnlocked] = useState(false);
  return <WorkerUnlockContext.Provider value={{ unlocked, toggle: () => setUnlocked((v) => !v) }}>{children}</WorkerUnlockContext.Provider>;
};

export function useWorkerUnlock(): WorkerUnlockContextType {
  const ctx = useContext(WorkerUnlockContext);
  if (!ctx) throw new Error("useWorkerUnlock must be used within a WorkerUnlockProvider");
  return ctx;
}
