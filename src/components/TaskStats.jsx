function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="stats">
      <div>Total: {total}</div>
      <div>Pending: {pending}</div>
      <div>Completed: {completed}</div>
    </div>
  );
}

export default TaskStats;