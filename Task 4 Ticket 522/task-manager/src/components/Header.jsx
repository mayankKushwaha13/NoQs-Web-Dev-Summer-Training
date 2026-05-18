function Header({ taskCount }) {
  return (
    <div>
      <h1>Task Manager</h1>
      <p>Total Tasks: {taskCount}</p>
    </div>
  );
}

export default Header;