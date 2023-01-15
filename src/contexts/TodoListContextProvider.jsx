import { createContext, useContext, useMemo } from "react";
import { useTodos } from "./useTodos";

export const TodoListContext = createContext();
export const TodoListMethodsContext = createContext();

// const TODO_LIST_LS_KEY = 'TODO_LIST_LS_KEY';

export function TodoListContextProvider({ children }) {
  const {
    todos, ...methods
  } = useTodos();

  // const [todos, setTodos] = useState(() => {
  //   const dataFromLS = localStorage.getItem(TODO_LIST_LS_KEY);
  //   const prepareData = dataFromLS ? JSON.parse(dataFromLS) : [];

  //   return prepareData;
  // });

  // useEffect(() => {
  //   localStorage.setItem(TODO_LIST_LS_KEY, JSON.stringify(todos));
  // }, [todos]);

  // const addNewTodo = useCallback((title) => {
  //   const newTodo = {
  //     id: crypto.randomUUID(),
  //     completed: false,
  //     title,
  //   };
  //   setTodos((prev) => [...prev, newTodo]);
  // }, [setTodos]);

  // const deleteTodo = (id) =>
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));

  // const clearAllTodos = useCallback(() => {
  //   setTodos([]);
  // }, [setTodos]);

  // const changeStatusTodo = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   );
  // };

  const todoListMethods = useMemo(() => methods, []);

  return (
    <TodoListContext.Provider value={todos}>
      <TodoListMethodsContext.Provider value={todoListMethods}>

        {children}

      </TodoListMethodsContext.Provider>
    </TodoListContext.Provider>
  );
}
export const useTodoListContext = () => useContext(TodoListContext);
export const useTodoListMethodsContext = () => useContext(TodoListMethodsContext);
