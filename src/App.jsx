// import { useCallback, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { HeaderMemo as Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  console.log('Render App');
  // const [todos, setTodos] = useState([]);

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
  //     })
  //   );
  // };

  return (
    <div className="container py-5">
      <Header />
      <hr className="my-5" />
      <Main />
      <hr className="my-5" />
      <Footer />
    </div>
  );
}

export default App;
