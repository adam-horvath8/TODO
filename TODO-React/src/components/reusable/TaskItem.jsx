import React, { useState } from "react";
import axios from "axios";
import EditForm from "./Inbox/EditForm";

export default function TaskItem({ task, allTasks, setAllTasks }) {
  const [isEditForm, setIsEditForm] = useState(false);

  console.log(task);

  const handleCompletedChange = async (taskId) => {
    if (!task) {
      console.error("Task not found");
    }

    const newTask = allTasks.map((t) => {
      if (t.id === taskId) {
        return {
          ...t,
          is_completed: !task.is_completed,
        };
      } else {
        return t;
      }
    });

    setAllTasks(newTask);

    try {
      await axios.put(`http://localhost:8000/tasks/${taskId}`, {
        is_completed: !task.is_completed,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const filteredTasks = allTasks.filter((task) => task.id !== taskId);
    setAllTasks(filteredTasks);

    try {
      await axios.post(`http://localhost:8000/tasks/${taskId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        key={task.id}
        className="flex justify-between min-w-max mb-2 p-2 bg-indigo-300"
      >
        <span className="p-1">{task.title}</span>
        <div className="flex justify-end gap-2">
          <span className="p-1">{task.date}</span>
          <input
            type="checkbox"
            checked={task.is_completed}
            onChange={() => handleCompletedChange(task.id)}
          ></input>
          <button className="p-1 bg-white">imp</button>
          <button
            onClick={() => setIsEditForm(!isEditForm)}
            className="p-1 bg-white"
          >
            E
          </button>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="p-1 bg-white"
          >
            X
          </button>
        </div>
      </div>
      {isEditForm && <EditForm task={task} />}
    </>
  );
}
