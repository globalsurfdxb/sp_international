import H2Title from "../../common/H2Title";

const ExpertiseSec = ({ data }) => {
  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden">
      <div className="container">
        <H2Title titleText="Our Expertise" marginClass="mb-50px" />
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-30px gap-y-15 xl:gap-y-18'>
          {
            data.items.map((item) => (
              <div>
                <div className='border-b border-white/30 pb-30px'>
                  <img src={item.icon} width={65} height={65} alt="" className="w-auto h-10 xl:h-[65px] object-contain" />
                </div>
                <h3 className='text-29 leading-[1.344827586206897] font-light mt-30px mb-5'>{item.title}</h3>
                <p className='text-19 leading-[1.473684210526316] font-extralight'>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSec;