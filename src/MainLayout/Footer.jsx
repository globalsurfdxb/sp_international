const Footer = () => {
  return (
    <div className="bg-[#191919] pt-[153px] text-white">
      <div className="container">
        <div className="border-b border-white/30 grid grid-cols-[549px_auto]">
          <div className="border-r border-white/30">
            <img src="./assets/images/logo.svg" alt="logo" className="w-[169px] h-auto" />
          </div>
          <div className="pl-[107px] pb-20">
            <p className="text-19 font-300 leading-[1.578947368421053] text-white/70 mb-[22px] max-w-[35ch]">Al Hudaiba Mall, Al Mina Street P.O. Box No. 118219 Dubai, UAE, Office 307, 3rd Floor</p>
            <div className="flex items-center gap-[22px] mb-[22px]">
              <a href="tel:+97142156222" className="text-29 font-300 leading-[1.344827586206897]">+971 42156222</a>
              <a href="mailto:info@spinternational.com" className="text-29 font-300 leading-[1.344827586206897]">info@spinternational.com</a>
            </div>
            <div>
              <ul className="flex items-center gap-[4px]">
                <li className="relative p-[2px] rounded-full bg-[linear-gradient(90deg,#30B6F9,#1E45A2,#30B6F9)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite] inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.08]">
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-black flex items-center justify-center">
                    <img src="./assets/images/icons/fb.svg" alt="fb" />
                  </a>
                </li>

                <li className="relative p-[2px] rounded-full bg-[linear-gradient(90deg,#30B6F9,#1E45A2,#30B6F9)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite] inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.08]">
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-black flex items-center justify-center">
                    <img src="./assets/images/icons/linked-in.svg" alt="linked-in" />
                  </a>
                </li>
                <li className="relative p-[2px] rounded-full bg-[linear-gradient(90deg,#30B6F9,#1E45A2,#30B6F9)] bg-[length:200%_200%] animate-[gradient_3s_linear_infinite] inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.08]">
                  <a href="#" className="w-[34px] h-[34px] rounded-full bg-black flex items-center justify-center">
                    <img src="./assets/images/icons/youtube.svg" alt="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 pt-[53px] pb-[45px]">
          <div>
            <h3 className="text-29 leading-[1.344827586206897] font-light mb-[27px]">About</h3>
            <ul>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Overview</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Legacy</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Leadership</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-29 leading-[1.344827586206897] font-light mb-[27px]">Services</h3>
            <ul>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Engineering & Construction</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">MEP</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Interior Fit-out</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Façade</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Facilities Management</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Water</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Design Studio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-29 leading-[1.344827586206897] font-light mb-[27px]">Commitments</h3>
            <ul>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Sustainability</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Community Engagement</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Safety & Quality</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-29 leading-[1.344827586206897] font-light mb-[27px]">Media</h3>
            <ul>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Press Releases</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Media Coverage</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Thought Leadership</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-29 leading-[1.344827586206897] font-light mb-[27px]">Quick Links</h3>
            <ul>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Careers</a></li>
              <li className="opacity-70 hover:opacity-100 transition-all duration-200 text-19 leading-[1.578947368421053] font-light"><a href="#">Projects</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-[20px] pb-[28px] border-t border-white/30">
        <div className="container">
          <p className="text-14 leading-[2.857142857142857] font-normal opacity-50">© {new Date().getFullYear()} SP International. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;