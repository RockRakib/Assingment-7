import { useAddTestimonialMutation } from "@/features/api/apiSlice";
import { FormEvent, useState } from "react";

const CreateSupply: React.FC = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [addTestimonial, { isError, isLoading, isSuccess }] =
    useAddTestimonialMutation();
  let Contain = null;
  if (isLoading) {
    Contain = <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    Contain = <h1>this is eor</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    Contain = <h1>Thanks For Your Feedback</h1>;
  }

  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmit(!submit);
    addTestimonial({ donorName: name, content: description });
    console.log({ description, name });
  };
  // if (submit) {
  //   return (
  //     <h1 className="flex items-center justify-center mt-[20%] text-2xl">
  //       thank for submit
  //     </h1>
  //   );
  // }
  return (
    <main className="w-screen h-screen flex justify-center items-center dark:bg-gray-900">
      <div className="max-w-7xl dark:bg-gray-950 dark:text-white">
        <form
          onSubmit={handleSubmit}
          className=" w-full p-4 rounded shadow-md"
          action="submit"
        >
          <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200">
            Add Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="mb-4 col-span-1 md:col-span-3">
              <input
                onBlur={(e) => setName(e.target.value)}
                type="text"
                id="Name"
                name="Title"
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                placeholder="Title"
              />
            </div>
            <div className="mb-4 col-span-1 md:col-span-3">
              <textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="Feedback"
                name="Feedback"
                className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
                placeholder="Feedback*"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
            >
              Submit
            </button>
            {Contain}
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateSupply;
