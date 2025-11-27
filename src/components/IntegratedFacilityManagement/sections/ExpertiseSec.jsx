
import { assets } from "../../../assets/index"
import H2Title from "../../common/H2Title"
import TabStyle1 from "../../common/TabStyle1"
const ExpertiseSec = ({data}) => {
 

  return (
    <section className="relative pt-12 pb-16 xl:pt-20 xl:pb-32 bg-primary text-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[519px] h-[725px]"><img src={assets.mainShape3} alt="" /></div>
      <div className="container">
        {/* Header */}
        <div className="mb-50px">
          <H2Title titleText={data.title} titleColor="white" marginClass="mb-50px" />
          <p className="text-19 leading-[1.473684210526316] opacity-90 font-light max-w-5xl">
            {data.desc}
          </p>
        </div>
        <TabStyle1 data={data.items} />
      
      </div>
    </section>
  );
};

export default ExpertiseSec;