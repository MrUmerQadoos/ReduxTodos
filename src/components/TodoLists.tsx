"use client";

import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, resetTodo } from "@/redux/TodoSlice";

interface Todo {
  id: number;
  text: string;
}

const TodoLists = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <div className="m-4 flex flex-col items-center bg-transparent  shadow-lg ">
      {todoList.length > 0 && (
        <div className="w-[540px] ">
          {todoList.map((item: Todo) => (
            <div
              key={item.id}
              className=" text-card-foreground px-4 py-2 flex items-center border border-border border-[#edeef6] dark:border-[#313346] justify-between text-[#4e597a] dark:text-[#bcb2b4] bg-white dark:bg-[#25273d] "
              style={{ height: "67px", width: "540px" }}
            >
              <p>{item.text}</p>
              <FaTrash
                onClick={() => dispatch(deleteTodo(item.id))}
                className="text-lg text-gray-400 hover:text-red-600 cursor-pointer transition-colors duration-300"
              />
            </div>
          ))}
          {todoList.length > 0 && (
            <div className="w-full flex items-center justify-end">
              <button
                onClick={() => dispatch(resetTodo())}
                className="bg-card text-xs uppercase px-5 py-2 font-medium rounded-md text-card-foreground hover:text-red-600 transition-colors duration-300"
              >
                Remove all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoLists;
