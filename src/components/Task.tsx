import React from "react";

// define TaskItem interface to use as props type
interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: number) => void; // callback function
  toggleDoneTaskFunc: (taskId: number) => void; // callback function
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {
  // callback function when delete button is clicked
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleDoneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/* Display title with or without line-through based on completion status */}
      <span className={completed ? "text-decoration-line-through" : ""}>
        {title}
      </span>
      <button
        className={`btn ${completed ? "btn-warning" : "btn-success"}`}
        onClick={toggleDoneBtnOnClick}
      >
        {completed ? "Undo" : "Done"}
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
     </div>
  );
}
