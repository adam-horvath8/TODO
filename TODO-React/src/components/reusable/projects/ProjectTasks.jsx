import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectTaskItem from "./ProjectTaskItem";
import Form from "../Inbox/Form";

const ProjectTasks = () => {
  const [isForm, setIsForm] = useState(false);
  const [pTasks, setPTasks] = useState([]);
  const [projectName, setProjectName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getProjectTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/tasks/${id}/list`
        );
        setPTasks(response.data);

        const pName = await response.data.find(
          (task) => task.id === parseInt(id, 10)
        );
        console.log(pName);
        setProjectName(pName);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectTasks();
  }, [id]);

  console.log(pTasks)

  return (
    <div className="p-5 w-full flex flex-col items-center gap-2 lg:px-40">
      <h2>{projectName}</h2>
      {pTasks.map((task) => (
        <ProjectTaskItem
          key={task.id}
          task={task}
          pTasks={pTasks}
          setPTasks={setPTasks}
        />
      ))}
      <button onClick={() => setIsForm(!isForm)}>Add Task</button>
      {isForm && <Form id={id} />}
    </div>
  );
};

export default ProjectTasks;
