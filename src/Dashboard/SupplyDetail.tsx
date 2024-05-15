import { useGetSupplyQuery } from "@/features/api/apiSlice";

import { useParams } from "react-router-dom";

export default function SupplyDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSupplyQuery(id);

  let content = null;

  if (isLoading) {
    content = <h1>this is loading</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>this is error</h1>;
  }

  if (!isLoading && !isError && !data) {
    content = <h1>data not found</h1>;
  }

  if (!isLoading && !isError && data) {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="overflow-hidden  rounded max-w-3xl bg-white text-slate-500 shadow-md shadow-slate-200">
        {content}
        <figure>
          <img
            src={data?.imageUrl}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            ></a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                {data?.title}
              </h3>
              <p className="text-sm text-slate-400"> {data?.amount} $</p>
            </div>
          </header>

          <p className="ml-10">{data?.description}</p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="flex justify-end gap-2 p-2 pt-0">
          <span> category : {data?.category}</span>
        </div>
      </div>
    </div>
  );
}
