"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";

export const Header = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");
  console.log(todos);

  return (
    <>
      <h1 className="flex justify-center text-[28px] leading-7 text-[#000000] font-semibold font-sans">
        To-Do list
      </h1>
      <div className="flex gap-2 justify-center mt-5">
        <Input
          className="flex-1 h-13 text-[18px] font-medium "
          placeholder="Add a new task..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          disabled={value.trim() === ""}
          onClick={() => {
            setTodos([...todos, { id: nanoid(), isDone: false, text: value }]);
            setValue("");
          }}
          variant="outline"
          className="w-15 h-13 bg-[#3C82F6] text-[#F9F9F9] cursor-pointer hover:bg-[#3A76E9] text-[18px] font-medium hover:text-white"
        >
          Add
        </Button>
      </div>
    </>
  );
};
