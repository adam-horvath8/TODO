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
    <form>
      <input type="text" onChange={(e) => setNewProject(e.target.value)} />
      <button onClick={handleAddProject}>Add Project</button>
    </form>
  );
};

export default ProjectAddForm;
