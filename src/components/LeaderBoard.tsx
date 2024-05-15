import { useGetLeaderBoardQuery } from "@/features/api/apiSlice";
interface Donation {
  amount: number;
  category: string;
  description: string;

  title: string;

  _id: string;
}

export default function LeaderBoard() {
  const { data, isLoading, isError, isSuccess } = useGetLeaderBoardQuery(null);

  const donor = data
    ?.slice()
    .sort((a: Donation, b: Donation) => b.amount - a.amount);
  let content = undefined;
  if (isLoading) {
    content = <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>this is error</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    content = <h1>Fetch Succesful</h1>;
  }
  return (
    <>
      <div className="my-6 text-center">
        {content}
        <h2 className="text-2xl font-semibold">Top Donors</h2>
      </div>
      <div className="w-full mx-6 overflow-x-auto">
        <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                amount
              </th>
            </tr>

            {donor?.map((item: Donation) => (
              <tr key={item._id}>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {item.title}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {item.title}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {item.category}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*<!-- End Simple Table --> */}
    </>
  );
}
