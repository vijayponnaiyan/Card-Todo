import { useForm } from "react-hook-form";
import InputField from "../../../components/Froms/InputField"; // Importing the reusable component
import Button from "../../../components/Buttoninfo/Button";

const TodoForm = ({ addTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addTodo(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap items-center justify-between bg-green-700 p-6 gap-2 rounded-lg shadow-md w-full max-w-6xl mx-auto"
    >
      <InputField
        label="Task Title"
        name="title"
        register={register}
        errors={errors}
        placeholder="Task title..."
        validation={{ required: "Task title is required" }}
      />

      <InputField
        label="Description"
        name="description"
        register={register}
        errors={errors}
        placeholder="Task description..."
        validation={{ required: "Task description is required" }}
      />

      <InputField
        label="Image URL"
        name="image"
        register={register}
        errors={errors}
        placeholder="Image URL..."
        validation={{
          pattern: {
            value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
            message: "Enter a valid image URL (jpg, png, gif, webp)",
          },
        }}
      />

      <Button
        label=" Add Task"
        type="submit"
        className="bg-white text-red-600 font-semibold px-4  py-2 rounded-md  mt-6 hover:bg-gray-100 transition-all"
      />
    </form>
  );
};

export default TodoForm;
