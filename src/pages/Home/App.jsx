import { useEffect, useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Button from "../../components/Buttoninfo/Button";
import Loader from "../../components/ui/Loader";
import ErrorState from "../../components/ui/ErrorState";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadTodos = () => {
    setIsLoading(true); // Show loader
    setTimeout(() => {
      try {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
      } catch (error) {
        setError("Failed to load todos");
      } finally {
        setIsLoading(false); // Hide loader after fetching data
      }
    }, 1000); // Simulate a delay (1 second) to show the loader effect
  };

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newTitle, newDescription) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle, description: newDescription }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  if (error) return <ErrorState message={error} />;

  return (
    <div className="min-h-screen flex flex-col items-center p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="mt-4 flex gap-3">
        <Button
          label="All"
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-blue-600" : "bg-blue-500"
          } text-white`}
        />
        <Button
          label="Completed"
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded ${
            filter === "completed" ? "bg-green-600" : "bg-green-500"
          } text-white`}
        />
        <Button
          label="Pending"
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded ${
            filter === "pending" ? "bg-yellow-600" : "bg-yellow-500"
          } text-white`}
        />
      </div>
      {isLoading ? (
        <Loader height="true" />
      ) : filteredTodos.length === 0 ? (
        <p className="mt-6 text-gray-500">No tasks found.</p>
      ) : (
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
          isLoading={isLoading} // Pass loading state to TodoList
        />
      )}
    </div>
  );
};

export default App;
