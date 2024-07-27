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
      <span style={{ textDecoration: completed? 'line-through' : 'none' }}>{title}</span>
      <button className="btn btn-success"onClick={toggleDoneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>Delete</button>
    </div>
  );
}
