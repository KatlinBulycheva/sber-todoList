import { useState } from "react";
import { useTodoListMethodsContext } from "../../../../contexts/TodoListContextProvider";

export function Form() {
  const { addNewTodo } = useTodoListMethodsContext();

  console.log('Render Form');
  const [title, setTitle] = useState("");

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length) {
      addNewTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex">
        <div className="mx-2">
          <input
            onChange={changeHandler}
            value={title}
            type="text"
            className="form-control"
            placeholder="Title..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
