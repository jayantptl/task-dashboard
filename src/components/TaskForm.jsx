import { useState } from "react";

function TaskForm({ addTask }) {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [priority,setPriority] = useState("Low")
  const [dueDate,setDueDate] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    addTask({title,description,priority,dueDate})

    setTitle("")
    setDescription("")
    setPriority("Low")
    setDueDate("")
  }

  return (

    <form className="task-form" onSubmit={handleSubmit}>

      <input
      placeholder="Title"
      value={title}
      required
      onChange={(e)=>setTitle(e.target.value)}
      />

      <input
      type="date"
      required
      value={dueDate}
      onChange={(e)=>setDueDate(e.target.value)}
      />

      <textarea
      placeholder="Description"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />

      <select
      value={priority}
      onChange={(e)=>setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit">Add Task</button>

    </form>
  )
}

export default TaskForm