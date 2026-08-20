"use client";

import React from "react";
import ButtonSm from "@/components/button/ButtonSm";
import ButtonOutline from "@/components/button/ButtonOutline";

const ButtonsShowcase: React.FC = () => (
  <div className="flex flex-col gap-md">
    <div className="flex flex-wrap items-center gap-sm">
      <ButtonSm text="Primary" onClick={() => {}} />
      <ButtonSm text="Secondary" onClick={() => {}} bgColor="bg-transparent hover:bg-primary-50 text-primary-600 border-[1.5px] border-primary-500" isBorder />
      <ButtonSm text="Ghost" onClick={() => {}} bgColor="bg-transparent hover:bg-neutral-100 text-neutral-700" />
      <ButtonOutline text="Outline" onClick={() => {}} />
      <ButtonSm text="Disabled" onClick={() => {}} disabled />
    </div>
    <div className="flex flex-wrap items-center gap-sm">
      <ButtonSm text="Pill primary" onClick={() => {}} isPill />
      <ButtonOutline text="Pill outline" onClick={() => {}} isPill />
    </div>
  </div>
);

export default ButtonsShowcase;
