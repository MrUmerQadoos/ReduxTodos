"use client";

import TodoForm from "@/components/TodoForm"; // Adjust the path to your TodoForm component
import ToggleMode from "@/components/ToggleMode"; // Adjust the path to your ToggleMode component
import TodoLists from "./TodoLists";

const MainLayout: React.FC = () => {
  return (
    <div className="relative z-20 pt-[78px]">
      <div className="min-h-screen bg-transparent text-white  flex flex-col items-center ">
        {/* Header with Logo and Toggle Button */}
        <header className="flex items-center justify-between  w-[540px] mb-4">
          <h1 className="text-2xl font-bold text-gray-100">Todo</h1>
          <ToggleMode />
        </header>

        {/* Todo Form */}
        <div>
          <TodoForm />
        </div>
        <div>
          <TodoLists />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
