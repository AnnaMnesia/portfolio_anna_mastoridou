"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
import {stack} from '@/data'


export function StackTooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={stack} />
    </div>
  );
}
