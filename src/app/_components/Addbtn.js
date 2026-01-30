"use client";

import { Button } from "@/components/ui/button";

export const Addbtn = ({}) => {
  return (
    <Button
      onClick={() => {
        setTodos([
          ...todos,
          {
            id: nanoid(),
            isDone: false,
            text: value,
          },
        ]);
        setValue("");
      }}
      variant="outline"
      className="w-15 h-13 bg-[#3C82F6] text-[#F9F9F9] cursor-pointer hover:bg-[#3A76E9] text-[16px] font-semibold"
    >
      Add
    </Button>
  );
};
