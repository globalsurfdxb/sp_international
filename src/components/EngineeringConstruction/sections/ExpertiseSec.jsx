import { engineeringData } from "../data";
const ExpertiseSec = () => {
  return ( 
    <section className="releative pt-8 pb-10 xl:pt-13 xl:pb-25 bg-primary text-white">
      <div className="container">
        <h2 className="text-60 font-light leading-[1.166666666666667] mb-3 xl:mb-5">{engineeringData.expertiseData.title}</h2>
        <p>{engineeringData.expertiseData.desc}</p>
        
      </div>
    </section>
   );
}
 
export default ExpertiseSec;