import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectTaskItem from "./ProjectTaskItem";

const ProjectTasks = () => {
  const [pTasks, setPTasks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProjectTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/tasks/${id}/list`
        );
        setPTasks(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectTasks();
  }, []);

  console.log(pTasks);

  return (
    <div>
      <h2>{id}</h2>
      {pTasks.map((task) => (
        <ProjectTaskItem task={task} pTasks={pTasks} setPTasks={setPTasks} />
      ))}
    </div>
  );
};

export default ProjectTasks;
