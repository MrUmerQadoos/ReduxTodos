"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/TodoSlice";
import toast from "react-hot-toast";
import CustomInput from "./CustomInput";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoinput, setTodoinput] = useState("");
  const [checked, setChecked] = useState(false);

  const saveTodo = () => {
    if (todoinput.trim() === "") {
      toast.error("Please enter a todo!");
      return;
    }
    dispatch(
      addTodo({
        id: Math.random(),
        text: todoinput,
      })
    );
    toast.success("Todo added successfully!");
    setTodoinput("");
  };

  return (
    <div className="flex flex-col items-center bg-card ">
      <CustomInput
        value={todoinput}
        onChange={(e) => setTodoinput(e.target.value)}
        placeholder="Enter your todo..."
        onEnter={saveTodo}
        checked={checked}
        onCheckboxChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default TodoForm;
