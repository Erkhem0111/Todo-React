"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const Active = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {todos.filter((item) => item.isDone === false).length === 0 && (
        <p className="text-[20px] text-[#6B7280] leading-100% font-normal font-sans flex justify-center pt-8">
          No active tasks.
        </p>
      )}
      {todos
        .filter((item) => {
          return item.isDone === false;
        })
        .map((item) => (
          <Card key={item.id}>
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
              <Button
                onClick={() => {
                  setTodos(todos.filter((todo) => todo.id !== item.id));
                }}
                className="h-10 bg-red-100 text-[#EF4444] text-[18px] cursor-pointer hover:bg-red-100"
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
