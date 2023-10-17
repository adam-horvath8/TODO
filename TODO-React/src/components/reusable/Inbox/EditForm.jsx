import axios from "axios";
import React, { useState } from "react";

const EditForm = ({ task }) => {
  const [taskName, setTaskName] = useState(task.title);
  const [date, setDate] = useState(task.date);

  const handleEdit = async (taskId) => {
    try {
      await axios.put(`http://localhost:8000/tasks/${taskId}`, {
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
        value={taskName}
        id="task"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label name="date">Date</label>
      <input
        type="date"
        name="date"
        value={date}
        id="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" onClick={() => handleEdit(task.id)}>
        Edit
      </button>
    </form>
  );
};

export default EditForm;
