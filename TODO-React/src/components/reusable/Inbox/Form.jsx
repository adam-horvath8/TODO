import React, { useState } from "react";
import axios from "axios";

const Form = ({ id }) => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      const url = id
        ? `http://localhost:8000/tasks/create/${id}`
        : "http://localhost:8000/tasks/create/";

      await axios.post(url, {
        title: taskName,
        date: date,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="flex flex-col bg-indigo-300 p-2 gap-2 w-full">
      <label name="task">Task Name</label>
      <input
        type="text"
        name="task"
        id="task"
        onChange={(e) => setTaskName(e.target.value)}
        className="p-1"
      />
      <label name="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
        className="p-1"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-indigo-100 max-w-fit self-center p-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
