const HeroSection: React.FC = () => {
  return (
    <div className="h-full">
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20"></div>
        </div>
      </header>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Empowering Communities Health
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Medical Supply
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                A streamlined platform connecting post-disaster communities with
                essential health and medical supplies
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-slate-600 hover:bg-slate-800 rounded-lg focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Request Supplies{" "}
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
