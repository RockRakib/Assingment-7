import { useGetSuppliesQuery } from "@/features/api/apiSlice";
import Container from "@/lib/container";
import { useState } from "react";
import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import { CardModal } from "./CardModal";
interface Donation {
  amount: number;
  category: string;
  description: string;
  imageUrl: string;
  title: string;

  _id: string;
}

export default function SupplyCard() {
  const [showAll, setShowAll] = useState(true);
  const {
    data: supplyPosts,
    isLoading,
    isError,
  } = useGetSuppliesQuery(undefined);

  let content = undefined;
  if (isLoading) {
    content = <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>this is error</h1>;
  }
  if (!isLoading && !isError && supplyPosts?.length === 0) {
    content = <h1>data not found</h1>;
  }

  return (
    <Container>
      <div>
        <div className="flex justify-between items-center my-16">
          <div className=" font-bold text-2xl   ">All Supplies</div>
          <div>{<CardModal />}</div>
        </div>
      </div>
      {}
      <div className="grid lg:grid-cols-3  gap-10">
        {showAll
          ? supplyPosts?.slice(0, 6).map((s: Donation) => (
              <div
                key={s._id}
                className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
              >
                {/*  <!-- Image --> */}
                <figure>
                  <img
                    src={s.imageUrl}
                    alt="card image"
                    className="aspect-video "
                  />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      {s.title}
                    </h3>
                    <p className=" text-slate-400"> {s.amount}</p>
                  </header>
                  <p>{s.category}</p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                  <Link to={`/supplies/${s._id}`}>
                    <button
                      onClick={() => console.log(s._id)}
                      className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-600 focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none"
                    >
                      <span>View Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))
          : supplyPosts?.map((s: Donation) => (
              <div
                key={s._id}
                className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
              >
                {/*  <!-- Image --> */}
                <figure>
                  <img
                    src={s.imageUrl}
                    alt="card image"
                    className="aspect-video "
                  />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      {s.title}
                    </h3>
                    <p className=" text-slate-400"> {s.amount}</p>
                  </header>
                  <p>{s.category}</p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                  <Link to={`/supplies/${s._id}`}>
                    <button
                      onClick={() => console.log(s._id)}
                      className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-600 focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none"
                    >
                      <span>View Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
      </div>
      {content}
      <Button
        onClick={() => setShowAll(!showAll)}
        className="ml-[40%] mt-12 px-20 py-8 text-lg"
      >
        {showAll ? <span>view All</span> : <span>View Less</span>}
      </Button>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </Container>
  );
}

// useEffect(() => {
//   const slider = new Glide(".glide-01", {
//     type: "carousel",
//     focusAt: "center",
//     perView: 3,
//     autoplay: 3000,
//     animationDuration: 700,
//     gap: 24,
//     classNames: {
//       nav: {
//         active: "[&>*]:bg-wuiSlate-700",
//       },
//     },
//     breakpoints: {
//       1024: {
//         perView: 2,
//       },
//       640: {
//         perView: 1,
//       },
//     },
//   }).mount();

//   return () => {
//     slider.destroy();
//   };
// }, []);
