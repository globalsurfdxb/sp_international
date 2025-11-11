const Banner = () => {
  return (
    <>
      <section className="relative w-full h-[280px] lg:h-[580px] bg-secondary/20">
        <img
          src="/assets/images/careers/banner.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_18.92%,rgba(0,0,0,0)_72.69%)]"
        ></div>
        <div className="container relative z-2 h-full">
          <div className="flex flex-col justify-end h-full pb-10 lg:pb-15  xl:pb-26 ">
            <h1 className="text-white  text-70  font-light leading-[1.08]  ">
              Projects
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
