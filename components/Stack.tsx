"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScroll";
import { StackTooltip } from "./ui/StackTooltip";

import Image from "next/image";

export function Stack() {
  return (
    <div className="flex flex-col my-20">
      <div className="relative">
        <div className="absolute -top-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-sm md:text-lg font-light text-gray-400">
                MY PATH TO SKILL AND HONOR <br />
                <span className="text-4xl md:text-[4rem] font-semibold mt-1 leading-none text-[#ecedee]">
                  My Stack.
                </span>
              </h2>
            </>
          }
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src={`/stack.svg`}
              alt="hero"
              height={250}
              width={250}
              draggable={false}
            />
            <StackTooltip />
          </div>
        </ContainerScroll>
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:18px_1px] opacity-15 lg:block"></div>
      </div>
    </div>
  );
}
