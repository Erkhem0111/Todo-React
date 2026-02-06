"use client";

import { useState } from "react";

export const Foot = ({ todos, setTodos }) => {
  return (
    <div className="w-full border-t-2 flex flex-col justify-between py-2">
      <div className="flex justify-between">
        <p className="text-[#6B7280] text-[18px] font-medium">
          {todos.filter((t) => t.isDone).length} of {todos.length} tasks
          completed
        </p>
        <p
          onClick={() => {
            setTodos([]);
          }}
          className="text-[#EF4444] text-[18px] cursor-pointer"
        >
          Clear completed
        </p>
      </div>
      <div className="flex justify-center gap-3 pt-6">
        <h1 className="text-[18px] text-[#6B7280] leading-100% font-normal font-sans">
          Powered by
        </h1>
        <h2 className="text-[18px] text-[#3B73ED] leading-100% font-normal font-sans">
          Pinecone academy
        </h2>
      </div>
    </div>
  );
};
