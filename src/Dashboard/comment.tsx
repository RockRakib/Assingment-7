import { useGetCommentsQuery } from "@/features/api/apiSlice";
import CreateComment from "./CreateComment";
import CommentBox from "./commentBox";
// type comment = {
//   timestamp: string;

//   username: string;
//   content: string;
// };

const Comment: React.FC = () => {
  const { data, isLoading, isError } = useGetCommentsQuery(undefined);

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
                    {data?.map((item) => (
                      <CommentBox key={item.id} comment={item} />
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
