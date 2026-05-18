import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div style={{ padding: "20px" }}>
      <Header taskCount={tasks.length} />

      <TaskInput onAddTask={addTask} />

      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;