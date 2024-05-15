import { useGetTestimonialsQuery } from "@/features/api/apiSlice";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonial: React.FC = () => {
  const {
    data: providerTestimonials,
    isError,
    isLoading,
    isSuccess,
  } = useGetTestimonialsQuery(null);

  let Contain = null;
  if (isLoading) {
    Contain = <h1>this is loading</h1>;
  }
  if (!isLoading && isError) {
    Contain = <h1>this is error</h1>;
  }
  if (!isLoading && !isError && isSuccess) {
    Contain = <h1>Thanks For Your Comment</h1>;
  }

  useEffect(() => {
    let slider;
    if (isSuccess) {
      slider = new Glide(".glide-08", {
        type: "slider",
        focusAt: "center",
        perView: 1,
        autoplay: 3000,
        animationDuration: 700,
        gap: 0,
        classes: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
      }).mount();
    }
    return () => {
      if (slider) {
        slider.destroy();
      }
    };
  }, [isSuccess]);

  return (
    <>
      <div className="text-center text-2xl font-bold mt-28 mb-12">
        Testimonials
      </div>
      <div className="relative w-full glide-08">
        {/* Slides */}
        <div
          className="overflow-hidden w-full max-w-7xl mx-auto text-center bg-gray-500 rounded shadow-2xl text-white shadow-slate-200"
          data-glide-el="track"
        >
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {providerTestimonials?.map((test) => (
              <TestimonialsCard key={test.id} test={test} />
            ))}
          </ul>
        </div>
        {/* Indicators */}
        <div
          className="flex items-center justify-center w-full gap-2 pt-6"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>

          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/* End Testimonial slider */}
    </>
  );
};

export default Testimonial;
