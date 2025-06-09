import { STORAGE_KEY } from "../constants/storageKey";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AddTodo } from "./AddTodo";

export const TodoList = () => {
  const { value: todos, setItem: setTodos } = useLocalStorage(
    STORAGE_KEY.TODO_LIST,
    []
  );

  const handleAddNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (todoToToggle) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoToToggle.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleTodo(todo)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
