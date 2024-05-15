import { useAddCommentMutation } from "@/features/api/apiSlice";
import { FormEvent, useState } from "react";

const CreateComment: React.FC = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const [addComment, { isLoading, isSuccess, isError }] =
    useAddCommentMutation();

  let Contain = null;
  if (isLoading) {
    Contain = <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    Contain = <h1>this is eor</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    Contain = <h1>Thanks For Your Comment</h1>;
  }
  const resetForm = () => {
    setUsername("");
    setComment("");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addComment({ username, comment });
    resetForm();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" w-full p-4 rounded shadow-md"
        action="submit"
      >
        <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200">
          Leave Your Comment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="mb-4 col-span-1 md:col-span-3">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="  w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 col-span-1 md:col-span-3">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
              placeholder="Comment*"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
          >
            Comment
          </button>
        </div>
        {Contain}
      </form>
    </div>
  );
};

export default CreateComment;
