import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;