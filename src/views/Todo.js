const Todo = ({ todos, title, deleteDataTodo }) => {
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todos-constainer">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.id} - {todo.title}
              &nbsp; &nbsp;
              <span onClick={() => handleDelete(todo.id)}>X</span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
