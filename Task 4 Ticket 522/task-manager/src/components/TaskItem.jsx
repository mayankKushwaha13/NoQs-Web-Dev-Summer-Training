function TaskItem({ task, onDelete }) {
  return (
    <div
      style={{
        marginTop: "10px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <span>{task.text}</span>

      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;