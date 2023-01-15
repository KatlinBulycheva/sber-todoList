// import footerStyles from "./footer.module.css";
import { memo } from "react";
import { useTodoListMethodsContext } from "../../contexts/TodoListContextProvider";

export const Footer = memo(() => {
  const { clearAllTodos } = useTodoListMethodsContext();

  console.log('Render Footer');
  // console.log({footerStyles})
  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearAllTodos} type="button" className="btn btn-danger">
        Delete all
      </button>
    </footer>
  );
});
