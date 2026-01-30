"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import { Header } from "./_components/Header";
import { All } from "./_components/All";
import { Active } from "./_components/Active";
import { Completed } from "./_components/Completed";
import { Foot } from "./_components/Foot";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="w-screen h-screen flex justify-center pt-15 shadow-2xl">
      <Card className="w-140 h-fit">
        <CardHeader>
          <Header />
          <Tabs defaultValue="all" className="mt-5">
            <TabsList className="flex gap-2 bg-transparent">
              <TabsTrigger
                className="bg-[#F3F4F6] text-[18px] p-5 text-[#363636] leading-100% font-semibold cursor-pointer data-[state=active]:bg-[#3C82F6] data-[state=active]:text-[#FFFFFF]"
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                className="bg-[#F3F4F6] text-[18px] p-5 text-[#363636] leading-100% font-semibold cursor-pointer data-[state=active]:bg-[#3C82F6] data-[state=active]:text-[#FFFFFF]"
                value="active"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                className="bg-[#F3F4F6] text-[18px] p-5 text-[#363636] leading-100% font-semibold cursor-pointer data-[state=active]:bg-[#3C82F6] data-[state=active]:text-[#FFFFFF]"
                value="completed"
              >
                Completed
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <All todos={todos} />
            </TabsContent>
            <TabsContent value="active">
              <Active todos={todos} />
            </TabsContent>
            <TabsContent value="completed">
              <Completed todos={todos} />
            </TabsContent>
          </Tabs>
          <CardDescription className="text-[20px] text-[#6B7280] leading-100% font-normal font-sans flex justify-center pt-8">
            No tasks yet. Add one above!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3 pt-10 justify-center">
          <Foot />
        </CardContent>
      </Card>
    </div>
  );
};
export default Todo;
