import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    onAddTask(input);

    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TaskInput;