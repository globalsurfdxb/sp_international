const MainNavbar = () => {
  return ( 
    <nav className="pt-[16px] pb-[17px] border-b border-[#f0f0f0]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src="./assets/images/main-logo.svg" alt="logo" />
          </div>
          <ul className="flex items-center gap-[35px]">
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">About</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Services</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Global Presence</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Projects</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Our Commitments</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Newsroom</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Careers</a></li>
            <li><a href="#" className="text-16 leading-[1.75] font-300 uppercase hover:font-bold active:font-bold focus-within:font-bold transition-all duration-300">Contact</a></li>
          </ul>
          <div className="flex items-center">
            <button className="bg-gradient-to-r from-[#30B6F9] to-[#1E45A2] text-white text-13 leading-[1.230769230769231] font-300 uppercase rounded-full px-[22px] py-[7.5px] cursor-pointer mr-3 hover:scale-[1.03] transition-all duration-300">العربية</button>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#30B6F9] via-[#1E45A2] to-[#30B6F9] animate-[gradient_3s_linear_infinite] bg-[length:200%_200%] inline-block transition-all duration-300 hover:shadow-[0_0_12px_rgba(48,182,249,0.6)] hover:scale-[1.03] cursor-pointer">
              <button className="uppercase text-16 leading-[1.75] font-300 px-[18px] py-[1.5px] bg-white rounded-full transition-all duration-300 hover:bg-[#f7faff]">
                Employee login
              </button>
            </div>
            <button className="cursor-pointer bg-[#000000CC] rounded-full p-[2px] w-[45px] h-[45px] flex items-center justify-center ml-5 transition-all duration-300 hover:shadow-[0_0_12px_rgba(48,182,249,0.6)] group">
              <img src="./assets/images/icons/search-icon.svg" alt="search" className="group-hover:scale-[1.1]  transition-all duration-300" />
            </button>


          </div>
        </div>
      </div>
    </nav>
   );
}
 
export default MainNavbar;