import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleComplete,
  removeTodo,
  editTodo,
  isLoading,
}) => {
  return (
    <div className="mt-4 w-full px-4">
      {isLoading ? ( // Show loader when loading
        <Loader height="true" />
      ) : todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
              editTodo={editTodo}
              isLoading={isLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
