"use client";

import { FaTrash, FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "@/redux/TodoSlice";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TodoLists = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleClearCompleted = () => {
    const completedTodos: Todo[] = todoList.filter(
      (todo: Todo) => todo.isCompleted
    );
    completedTodos.forEach((todo: Todo) => dispatch(deleteTodo(todo.id)));
  };

  const filteredTodos = todoList.filter((item: Todo) => {
    if (filter === "active") return !item.isCompleted;
    if (filter === "completed") return item.isCompleted;
    return true; // For 'all'
  });

  const incompleteCount = todoList.filter(
    (item: Todo) => !item.isCompleted
  ).length;

  return (
    <div className="m-4 flex flex-col items-center bg-transparent shadow-lg">
      <div className="w-[540px]">
        {filteredTodos.length > 0 && (
          <div>
            {filteredTodos.map((item: Todo) => (
              <div
                key={item.id}
                className={`text-card-foreground px-4 py-2 flex items-center border border-border border-[#edeef6] dark:border-[#313346] justify-between text-[#4e597a] dark:text-[#bcb2b4] bg-white dark:bg-[#25273d] ${
                  item.isCompleted ? "line-through text-gray-400" : ""
                }`}
                style={{ height: "67px", width: "540px" }}
                onClick={() => handleToggle(item.id)}
              >
                <div
                  className={` ml-2 w-[25px] h-[25px] border rounded-full flex items-center justify-center cursor-pointer ${
                    item.isCompleted
                      ? "bg-gradient-to-r from-[#66c8fe] to-[#b269f4]"
                      : "bg-transparent border-gray-400"
                  }`}
                >
                  {item.isCompleted && (
                    <FaCheck className="text-white text-[10px]" />
                  )}
                </div>
                <p className="ml-4 flex-1">{item.text}</p>
                <FaTrash
                  onClick={() => dispatch(deleteTodo(item.id))}
                  className="text-lg mr-2 text-gray-400 hover:text-red-600 cursor-pointer transition-colors duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-[540px] mt-4">
        <div className="flex items-center justify-between border border-border border-[#edeef6] bg-white dark:bg-[#25273d] dark:border-[#313346] text-gray-400 dark:text-gray-500 py-2 px-4">
          <span className="flex-shrink-0">
            {incompleteCount} item{incompleteCount !== 1 ? "s" : ""} left
          </span>
          <div className="flex flex-grow justify-center gap-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`text-sm font-medium ${
                filter === "all" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`text-sm font-medium ${
                filter === "active" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`text-sm font-medium ${
                filter === "completed" ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={() => handleClearCompleted()}
            className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors duration-300"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoLists;
