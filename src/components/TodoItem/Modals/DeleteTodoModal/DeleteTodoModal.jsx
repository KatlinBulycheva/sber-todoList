import { useTodoListMethodsContext } from "../../../../contexts/TodoListContextProvider";
import { Modal } from "../../../Modal/Modal";

export function DeleteTodoModal({
  isOpen, setIsDeleteModalOpen, title, id
}) {
  const { deleteTodo } = useTodoListMethodsContext();

  const closeDeleteModalHandler = () => {
    setIsDeleteModalOpen(false);
  };

  const deleteHandler = () => {
    deleteTodo(id);
  };

  return (
    <Modal isOpen={isOpen} closeHandler={closeDeleteModalHandler} title={title}>
      <p>
        you want to delete the task <b>&apos;{title}&apos;</b>
      </p>
      <div className="d-flex justify-content-center align-items">
        <button
          onClick={closeDeleteModalHandler}
          type="button"
          className="btn mx-2 btn-primary"
        >
          Close
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
