import { useGetCommentsQuery } from "@/features/api/apiSlice";
import CreateComment from "./CreateComment";
// type comment = {
//   timestamp: string;

//   username: string;
//   content: string;
// };
interface Items {
  _id: string;
  comment: string;
  timestamp: string;
  username: string;
}

const Comment: React.FC = () => {
  const { data, isLoading, isError } = useGetCommentsQuery(undefined);
  console.log(data);

  if (isLoading) {
    <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    <h1>this is error</h1>;
  }
  if (!isLoading && !isError && data?.length === 0) {
    <h1>data not found</h1>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    console.log(data);

    return (
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center ">
          <h1 className="text-3xl font-semibold my-20 bg-red-200">
            Welcome to the Community Page
          </h1>
          <div className="max-w-7xl dark:bg-gray-950 dark:text-white">
            <CreateComment />
            <div className="mt-20">
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                      All Comments
                    </h1>
                  </div>
                  <div className="flex flex-wrap -m-4">
                    {data?.map((item: Items) => (
                      <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white  hover:opacity-100">
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {item.username}
                            </h1>
                            <p className="leading-relaxed">{item.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Comment;
