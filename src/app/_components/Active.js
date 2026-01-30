"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const Active = (todos) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {todos
        .filter((item) => {
          return item.isDone === false;
        })
        .map((item, index) => (
          <Card key={index}>
            <CardContent className="flex justify-between items-center h-2">
              <div className="flex gap-3 items-center">
                <Checkbox
                  className="cursor-pointer"
                  checked={item.isDone}
                  onClick={() => {
                    const newTodos = todos.map((todo) => {
                      if (todo.id !== item.id) return todo;
                      return {
                        isDone: item.isDone,
                        text: item.text,
                        id: item.id,
                      };
                    });
                    setTodos(newTodos);
                  }}
                />
                <p className="font-medium text-[18px] leading-100%">
                  {item.text}
                </p>
              </div>
              <Button className="h-10 bg-[#FEF2F2] text-[#EF4444] text-[18px] cursor-pointer">
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
