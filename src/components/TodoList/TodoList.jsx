import { useTodoListContext } from "../../contexts/TodoListContextProvider";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList() {
  console.log('Render TodoList');
  const todos = useTodoListContext();
  if (!todos.length) return <p>List is empty...</p>;
  return (
    // todos.length ? <ul>List</ul> : <p>List is empty...</p>
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}
