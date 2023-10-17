import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Link, Outlet } from "react-router-dom";
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

  console.log(allProjects);

  return (
    <div className="p-5 w-full flex flex-col items-center gap-2">
      {allProjects.map((project) => (
        <Link to={`/${project.id.toString()}`} key={project.id}>
          <div className="p-3 bg-indigo-300 min-w-full">
            <h3>{project.title}</h3>
          </div>
        </Link>
      ))}
      <button onClick={() => setIsForm(!isForm)}>Add Project</button>
      {isForm && <ProjectAddForm />}
    </div>
  );
};

export default Projects;
