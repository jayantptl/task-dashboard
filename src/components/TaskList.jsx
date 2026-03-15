import TaskItem from "./TaskItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

function TaskList({ tasks, deleteTask, toggleStatus, editTask, view }) {

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>📭 No tasks found</h3>
        <p>Try creating a task or adjusting filters.</p>
      </div>
    );
  }

  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div
          className={view === "card" ? "task-grid" : "task-list"}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskItem
                    task={task}
                    deleteTask={deleteTask}
                    toggleStatus={toggleStatus}
                    editTask={editTask}
                  />
                </div>
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskList;