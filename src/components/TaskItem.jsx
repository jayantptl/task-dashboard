import { useState } from "react";

function TaskItem({ task, deleteTask, toggleStatus, editTask }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveEdit = () => {
    editTask({ ...task, title });
    setEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>

      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>

          <p>Due: {task.dueDate}</p>

          <div className="task-buttons">
            <button onClick={() => toggleStatus(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => setEditing(true)}>Edit</button>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}

    </div>
  );
}

export default TaskItem;