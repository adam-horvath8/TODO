import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProjectAddForm from "./ProjectAddForm";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/projects/");
        setAllProjects(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProjects();
  }, []);

  const handleDeleteProject = async (projectId) => {
    const filteredProjects = allProjects.filter(
      (project) => project.id !== projectId
    );
    setAllProjects(filteredProjects);

    try {
      await axios.post(`http://localhost:8000/tasks/${projectId}`);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(allProjects);

  return (
    <div className="p-5 w-full flex flex-col items-center gap-2 lg:px-60">
      {allProjects.map((project) => (
        <div className="flex min-w-full justify-between">
          <Link
            to={`/${project.id.toString()}`}
            key={project.id}
            className="p-3 bg-indigo-300 flex-[2_2_0%]"
          >
            <div>
              <h3>{project.title}</h3>
            </div>
          </Link>
          <button
            onClick={() => handleDeleteProject(project.id)}
            className="flex-1 bg-indigo-100"
          >
            Delete
          </button>
        </div>
      ))}
      <button onClick={() => setIsForm(!isForm)} className="p-2 mb-2 bg-indigo-200">Add Project</button>
      {isForm && <ProjectAddForm />}
    </div>
  );
};

export default Projects;
