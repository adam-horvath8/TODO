import React, { useState } from "react";
import axios from "axios";

const ProjectAddForm = () => {
  const [newProject, setNewProject] = useState("");

  const handleAddProject = async () => {
    try {
      await axios.post("http://localhost:8000/projects/create/", {
        title: newProject,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="p-2 bg-indigo-300 w-full flex justify-between gap-4">
      <input type="text" onChange={(e) => setNewProject(e.target.value)} className="flex-[2_2_0%] p-2"/>
      <button onClick={handleAddProject} className="bg-indigo-100 p-2">Add Project</button>
    </form>
  );
};

export default ProjectAddForm;
