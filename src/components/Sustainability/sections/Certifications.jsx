import H2Title from "../../../components/common/H2Title";

const Certifications = ({ data }) => {
  return (
    <section className="pt-text30 pb30">
      <div className="container">
        <H2Title titleText={data.title} marginClass="mb-5 lg:mb-10 2xl:mb-15" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            data.items.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="border-b border-cmnbdr pb-30px mb-4">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3 className="text-29 leading-[1.724137931034483] font-light font-title">{item.title}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Certifications;