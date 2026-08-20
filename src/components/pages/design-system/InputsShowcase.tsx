"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import InputField from "@/components/inputField/InputField";

const InputsShowcase: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-md max-w-[560px]">
    <InputField label="Full name" placeholder="Jane Doe" required />
    <InputField label="Email" type="email" placeholder="jane@example.com" />
    <InputField label="With error" placeholder="jane@example.com" error="Enter a valid email address" />
    <InputField label="Disabled" placeholder="Not editable" disabled />

    <div className="flex flex-col gap-1.5">
      <label className="text-body-sm font-bold text-neutral-700">Employment type</label>
      <div className="relative">
        <select className="w-full appearance-none font-body text-body-sm font-semibold text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-full py-sm pl-md pr-2xl cursor-pointer">
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500 pointer-events-none" />
      </div>
    </div>
  </div>
);

export default InputsShowcase;
