const H2Title = ({ titleText, titleColor, marginClass }) => {
  return (
    <h2 className={`text-60 md:text-40 2xl:text-60 font-light leading-[1.166666666666667] text-${titleColor} ${marginClass}`}>{titleText}</h2>
  );
}

export default H2Title; 