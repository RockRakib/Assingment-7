import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Gallary: React.FC = () => {
  return (
    <>
      <div className="mt-20 mb-8 text-center">
        {" "}
        <span className="text-2xl font-bold text-center ">Donations</span>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <p className=" text-lg mb-16 max-w-3xl mx-auto">
          "Your generous donation can make a significant difference in
          supporting communities affected by disasters and ensuring access to
          essential health and medical supplies"
        </p>
        <Carousel>
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id}>
                <img src={item.imageUrl} className="w-full rounded-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Gallary;

// export default function Gallary() {
//   useEffect(() => {
//     const slider = new Glide(".glide-05", {
//       type: "slider",
//       focusAt: "center",
//       perView: 1,
//       autoplay: 3000,
//       animationDuration: 700,
//       gap: 0,
//       classes: {
//         nav: {
//           active: "[&>*]:bg-wuiSlate-700",
//         },
//       },
//     }).mount();

//     return () => {
//       slider.destroy();
//     };
//   }, []);

//   return (
//     <>
//       {/*<!-- Component: Slider with indicators outside --> */}
//       <div className="relative w-full glide-05">
//         {/*    <!-- Slides --> */}
//         <div className="overflow-hidden" data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
//             {carouselItems.map((item) => (
//               <GallaryCard key={item.id} item={item} />
//             ))}
//           </ul>
//         </div>
//         {/*    <!-- Indicators --> */}
//         <div
//           className="flex items-center justify-center w-full gap-2"
//           data-glide-el="controls[nav]"
//         >
//           <button
//             className="p-4 group"
//             data-glide-dir="=0"
//             aria-label="goto slide 1"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//           <button
//             className="p-4 group"
//             data-glide-dir="=1"
//             aria-label="goto slide 2"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//           <button
//             className="p-4 group"
//             data-glide-dir="=2"
//             aria-label="goto slide 3"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//           <button
//             className="p-4 group"
//             data-glide-dir="=3"
//             aria-label="goto slide 4"
//           >
//             <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
//           </button>
//         </div>
//       </div>
//       {/*<!-- End Slider with indicators outside --> */}
//     </>
//   );
// }

const carouselItems = [
  {
    id: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1372606861/photo/volunteers-hand-giving-donations-to-a-person-at-a-community-center.jpg?s=2048x2048&w=is&k=20&c=7anV6IB06m8HkzZ9NxP6wh10JnhRK8RrKmkU644iTGg=",
    caption: "Donated medical supplies being delivered to a local clinic.",
  },
  {
    id: 2,
    imageUrl:
      "https://media.istockphoto.com/id/1389973541/photo/volunteers-packing-at-a-local-food-bank.jpg?s=2048x2048&w=is&k=20&c=bSbluKBTL64Q9JA5kXMwZMArCl-dKly4eQ86mto6hyM=",
    caption:
      "Volunteers distributing hygiene kits to a community affected by disaster.",
  },
  {
    id: 3,
    imageUrl:
      "https://media.istockphoto.com/id/472165353/photo/little-girl-holding-bowl-at-soup-kitchen-or-food-bank.jpg?s=612x612&w=0&k=20&c=_25T4X2NL96SQmkZemBPSPo0n5azVrWOARl4JxuxeuU=",
    caption:
      "Volunteers distributing hygiene kits to a community affected by disaster.",
  },
];
