import { useState } from "react";
import { useTodoListMethodsContext } from "../../../../contexts/TodoListContextProvider";
import { Modal } from "../../../Modal/Modal";

export function EditTodoModal({
  isOpen, setIsEditModalOpen, title, id
}) {
  const [input, setInput] = useState(title);

  const { editTodo } = useTodoListMethodsContext();

  const closeEditModalHandler = () => {
    setIsEditModalOpen(false);
  };

  const saveTodo = () => {
    console.log(title);
    editTodo(id, { title: input });
    closeEditModalHandler();
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeEditModalHandler}>
      <p className="d-flex justify-content-center align-items">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </p>
      <div className="d-flex justify-content-center align-items">
        <button
          onClick={closeEditModalHandler}
          type="button"
          className="btn mx-2 btn-primary"
        >
          Close
        </button>
        <button disabled={!input} onClick={saveTodo} type="button" className="btn btn-success">
          Save
        </button>
      </div>
    </Modal>
  );
}
