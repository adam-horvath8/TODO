import TaskItem from "./TaskItem";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./Form";

const Inbox = () => {
  const [isForm, setIsForm] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tasks/");
        setAllTasks(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getTasks();
  }, []);

  console.log(allTasks);

  const handleAddTask = () => {
    setIsForm(!isForm);
  };

  return (
    <div className="p-5 w-full md:p-10 lg:px-40">
      {allTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
      ))}
      <button onClick={() => handleAddTask()}>Add Task</button>
      {isForm && <Form />}
    </div>
  );
};

export default Inbox;
