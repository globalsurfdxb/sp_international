'use client'; 
import { data } from "./data";
const About = () => {
 
  return (
    <>
        <section className="py-12 xl:py-15 2xl:pt-25 2xl:pb-30">
          <div className="container">
             <div
      className={`grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-7 2xl:gap-[167px]`}
    >
      {/* Left Column */}
      <div>
        <p className='text-29 font-light leading-[1.345]'>
          {data.left.text}
        </p>
        <div className='mt-10 xl:mt-23 pt-12 border-t border-black/20'>
          <div className='text-19 font-light leading-[1.474] flex flex-col gap-7 text-paragraph'>
            {data.left.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div>
        <div className="bg-primary p-12 2xl:py-[48px] 2xl:px-15 h-full bg-[url('/assets/images/about-us/rtanm.svg')] bg-auto bg-right-bottom bg-no-repeat">
          <div className="flex flex-col gap-8">
            {data.right.map((item, i) => (
              <div key={i}>
                <h3 className='text-40 font-light leading-[1.474] text-white'>
                  {item.value}
                </h3>
                <p className='text-19 font-light leading-[1.474] text-white/70'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
          </div>
         
        </section>
    </>
  );
};

export default About;
