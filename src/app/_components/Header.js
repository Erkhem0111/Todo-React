"use client";

import { Input } from "@/components/ui/input";
import { Addbtn } from "./Addbtn";
import { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <h1 className="flex justify-center text-[28px] leading-7 text-[#000000] font-semibold font-sans">
        To-Do list
      </h1>
      <div className="flex gap-2 justify-center mt-5">
        <Input
          className="flex-1 h-13"
          placeholder="Add a new task..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Addbtn />
      </div>
    </>
  );
};
