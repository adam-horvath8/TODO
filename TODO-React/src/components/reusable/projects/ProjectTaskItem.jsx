import React from "react";

const ProjectTaskItem = ({task, pTasks, sePTasks}) => {
  return (
    <>
      <div
        key={task.id}
        className="flex justify-between min-w-max mb-2 p-2 bg-indigo-200"
      >
        <span className="p-1">{task.title}</span>
        <div className="flex justify-end gap-2">
          <span className="p-1">{task.date}</span>
          <input
            type="checkbox"
            checked={task.is_completed}
            onChange={() => handleCompletedChange(task.id)}
          ></input>
          <button className="p-1 bg-white">imp</button>
          <button
            onClick={() => setIsEditForm(!isEditForm)}
            className="p-1 bg-white"
          >
            E
          </button>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="p-1 bg-white"
          >
            X
          </button>
        </div>
      </div>
      {isEditForm && (
        <EditForm task={task} setAllTasks={setAllTasks} allTasks={allTasks} />
      )}
    </>
  );
};

export default ProjectTaskItem;
