export const loadTasks = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const loadTheme = () => {
  return localStorage.getItem("theme") || "dark";
};

export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};