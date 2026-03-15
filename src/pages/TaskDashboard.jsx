import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchFilter from "../components/SearchFilter";
import TaskStats from "../components/TaskStats";
import ThemeToggle from "../components/ThemeToggle";
import ViewToggle from "../components/ViewToggle";

import {
  loadTasks,
  saveTasks,
  loadTheme,
  saveTheme
} from "../utils/localStorage";

function TaskDashboard() {
  const [tasks, setTasks] = useState(loadTasks());
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [view, setView] = useState("list");
  const [theme, setTheme] = useState(loadTheme());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    document.body.className = theme;
    saveTheme(theme);
  }, [theme]);

 const addTask = (task) => {
  const newTask = {
    ...task,
    id: Date.now(),
    completed: false,
  };

  setTasks((prev) => [newTask, ...prev]);
};

  const deleteTask = (id) => {
    if (confirm("Delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);

    setTasks(items);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "completed"
        ? task.completed
        : !task.completed;

    const matchesPriority =
      priorityFilter === "all"
        ? true
        : task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="dashboard">

      <div className="top-bar">
        <h1>Task Dashboard</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      <TaskStats tasks={tasks} />

      <TaskForm addTask={addTask} />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        setStatusFilter={setStatusFilter}
        setPriorityFilter={setPriorityFilter}
      />

      <ViewToggle view={view} setView={setView} />

      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleStatus={toggleStatus}
          editTask={editTask}
          view={view}
        />
      </DragDropContext>

    </div>
  );
}

export default TaskDashboard;