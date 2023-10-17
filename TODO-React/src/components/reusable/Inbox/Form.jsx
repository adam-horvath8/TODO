import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8000/tasks/create/`, {
        title: taskName,
        date: date,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <label name="task">Task Name</label>
      <input
        type="text"
        name="task"
        // value={task.title}
        id="task"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label name="date">Date</label>
      <input
        type="date"
        name="date"
        // value={task.date}
        id="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
