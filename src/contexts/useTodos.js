import { useCallback, useEffect, useState } from "react";

const TODO_LIST_LS_KEY = 'TODO_LIST_LS_KEY';

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const dataFromLS = localStorage.getItem(TODO_LIST_LS_KEY);
    const prepareData = dataFromLS ? JSON.parse(dataFromLS) : [];

    return prepareData;
  });

  useEffect(() => {
    localStorage.setItem(TODO_LIST_LS_KEY, JSON.stringify(todos));
  }, [todos]);

  const editTodo = useCallback((id, editedTodo) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...editedTodo,
        };
      }
      return todo;
    }));
  }, [setTodos]);

  const addNewTodo = useCallback((title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      title,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, [setTodos]);

  const deleteTodo = useCallback((id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id)), [setTodos]);

  const clearAllTodos = useCallback(() => {
    setTodos([]);
  }, [setTodos]);

  const changeStatusTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  }, [setTodos]);

  return {
    todos,
    addNewTodo,
    deleteTodo,
    clearAllTodos,
    changeStatusTodo,
    editTodo
  };
};
