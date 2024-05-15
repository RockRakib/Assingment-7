import { useGetSuppliesQuery } from "@/features/api/apiSlice";
import Container from "@/lib/container";
import { useState } from "react";
import { Button } from "../ui/button";
import CardDetails from "./CardDetails";
import { CardModal } from "./CardModal";

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
          ? supplyPosts
              ?.slice(0, 6)
              .map((s) => <CardDetails key={s._id} s={s} />)
          : supplyPosts?.map((s) => <CardDetails key={s.id} s={s} />)}
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
