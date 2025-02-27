import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import Card from "../../../components/Cardinfio/Card";
import Button from "../../../components/Buttoninfo/Button";
import Loader from "../../../components/ui/Loader";

const TodoItem = ({ todo, toggleComplete, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      editTodo(todo.id, newTitle, newDescription);
      setIsEditing(false);
      setIsLoading(false);
    }, 500); // Simulating a short delay
  };

  const handleToggleComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      toggleComplete(todo.id);
      setIsLoading(false);
    }, 300);
  };

  const handleRemove = () => {
    setIsLoading(true);
    setTimeout(() => {
      removeTodo(todo.id);
      setIsLoading(false);
    }, 300);
  };

  return (
    <Card>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[150px]">
          <Loader height="true" />{" "}
          {/* Show loader while an action is in progress */}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {todo.image && (
            <img
              src={todo.image}
              alt={todo.title}
              className="w-full h-32 object-cover rounded"
            />
          )}

          {isEditing ? (
            <>
              <input
                type="text"
                className="border p-2 rounded"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <textarea
                className="border p-2 rounded"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <Button
                label="Save"
                onClick={handleSave}
                icon={FaSave}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              />
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold">{todo.title}</h3>
              <p className="text-gray-600 line-clamp-2">{todo.description}</p>
              <div className="flex justify-between items-center">
                <Button
                  label={todo.completed ? "Completed" : "Mark Complete"}
                  onClick={handleToggleComplete}
                  className={
                    todo.completed ? "bg-green-500 text-white" : "bg-gray-200"
                  }
                />
                <div className="flex gap-2">
                  <Button
                    label="Edit"
                    onClick={() => setIsEditing(true)}
                    icon={FaEdit}
                    className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                  />

                  <Button
                    onClick={handleRemove}
                    icon={FaTrash}
                    className="text-red-500 hover:text-red-700"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </Card>
  );
};

export default TodoItem;
