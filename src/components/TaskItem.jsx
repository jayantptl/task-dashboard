import { useState } from "react";

function TaskItem({ task, deleteTask, toggleStatus, editTask }) {

  const [editing,setEditing] = useState(false)

  const [form,setForm] = useState({
    title:task.title,
    description:task.description,
    priority:task.priority,
    dueDate:task.dueDate
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const saveEdit = ()=>{
    editTask({
      ...task,
      ...form
    })
    setEditing(false)
  }

  return (

    <div className={`task ${task.completed ? "completed" : ""}`}>

     {editing ? (

  <div className="edit-form">

    <div className="edit-row">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />
    </div>

    <div className="edit-row">
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
    </div>

    <div className="edit-row two-cols">

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
      />

    </div>

    <div className="edit-buttons">

      <button onClick={saveEdit}>
        Save
      </button>

      <button onClick={()=>setEditing(false)}>
        Cancel
      </button>

    </div>

  </div>

) : (

        <>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>

          <p>Due: {task.dueDate}</p>

          <div className="task-buttons">

            <button onClick={()=>toggleStatus(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={()=>setEditing(true)}>
              Edit
            </button>

            <button onClick={()=>deleteTask(task.id)}>
              Delete
            </button>

          </div>

        </>

      )}

    </div>

  )

}

export default TaskItem