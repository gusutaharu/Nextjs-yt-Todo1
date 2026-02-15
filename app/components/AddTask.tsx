"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { addTodo } from "../api";
import { Task } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export const AddTask = () => {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = useState<string>("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await addTodo({ id: uuidv4(), text: taskTitle });
    setTaskTitle("");
    router.refresh();
  };
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-499 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  );
};
