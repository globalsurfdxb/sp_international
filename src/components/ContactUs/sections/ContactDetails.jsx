import React, { useState } from "react";
import Select from "react-select";
import { contactData } from "../data"; 
 
const ContactDetails = () => {
const [subject, setSubject] = useState(null);

  const options = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Support" },
    { value: "other", label: "Other" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      borderRadius: 0,
      padding: "4px 0",
      boxShadow: "none",
      color: "white",
      cursor: "pointer",
    }),
    singleValue: (base) => ({ ...base, color: "white" }),
    placeholder: (base) => ({ ...base, color: "transparent" }), // hide placeholder
    indicatorSeparator: () => ({ display: "none" }),
    menu: (base) => ({
      ...base,
      background: "#0E1A2A",
      color: "white",
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "#1A2D47" : "transparent",
      color: "white",
      cursor: "pointer",
    }),
  };
  return (
    <section className="pt30 bg-f5f5 pb-10 lg:pb-0">
      <div className="container ">
        <h1 className="text-70 font-light leading-[1.071428571428571] pb-5 xl:pb-15 3xl:pb-22 3xl:pb-31">{contactData.title}</h1>
        <div className="grid grid-cols-1   lg:grid-cols-[auto_54.7%]  gap-8 3xl:gap-2">
          <div >
          <p className="text-19 font-light text-paragraph mb-3 lg:mb-6 ">Head office</p>
          <p className="  text-29 font-bold leading-[1.31] ">{contactData.name}</p>
          <p className="text-paragraph text-29 font-light leading-[1.35] max-w-[25ch]">{contactData.address}</p>
         <div className="flex flex-col sm:flex-row  gap-5 md:gap-15 xl:gap-[130px] my-6 lg:my-10 xl:my-15 2xl:my-20">
          <div >
            <p className="text-paragraph text-19 font-light mb-[10px] leading-[1.48] ">Phone</p>
             <p className="text-black text-19 xl:text-29 font-light leading-[1.31] ">{contactData.phone}</p>
          </div>
          <div>
            <p className="text-paragraph text-19 font-light mb-[10px] leading-[1.48] ">Email</p>
             <p className="text-black text-19 xl:text-29 leading-[1.31]   font-light">{contactData.email}</p>
          </div>
         </div>
         
          <div className="flex gap-[6px] items-center cursor-pointer">
            <p className="text-16 font-light uppercase text-paragraph">Location</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
            <g clip-path="url(#clip0_3796_2437)">
            <path d="M7.49886 1.06396C3.95699 1.06396 1.08594 3.91705 1.08594 7.43674C1.08594 8.72329 1.47165 9.91985 2.12904 10.9198L7.43513 17.7258L12.8653 10.9198C13.5261 9.91652 13.9084 8.71996 13.9084 7.43674C13.9151 3.91705 11.0407 1.06396 7.49886 1.06396Z" stroke="#30B6F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10Z" stroke="#30B6F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            </g>
            <defs>
            <clipPath id="clip0_3796_2437">
            <rect width="15" height="19" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          </div>
          <div className="bg-primary p-6 lg:p-8 xl:p-10 3xl:p-17    3xl:pt-15">
            <h2 className="text-60 font-light leading-[1.344827586206897] text-white mb-4 lg:mb-6 2xl:mb-8 3xl:mb-12">General Inquiry</h2>
              <form >
 
                  <div className="flex gap-12 w-full mb-6 xl:mb-8 3xl:mb-15">
                    <div class="relative w-full">
                    <input
                      id="name"
                      type="text"
                      class="peer w-full bg-transparent text-19 border-0 border-b border-white/30 py-3 
                            focus:border-white text-white focus:outline-none
                            placeholder-transparent"
                      placeholder=" "
                    />
                    <label
                      for="name"
                      class="absolute left-0 top-1/2 -translate-y-1/2  text-white text-19 font-light
                            transition-all duration-200 ease-out
                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-focus:-translate-y-full
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-19
                            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-full peer-not-placeholder-shown:text-19 peer-not-placeholder-shown:text-white"
                    >
                      Name*
                    </label>
                  </div>
                
                  <div class="relative w-full">
                    <input
                      id="email"
                      type="email"
                      class="peer w-full bg-transparent text-19 border-0 border-b border-white/30 py-3 
                            focus:border-white text-white focus:outline-none
                            placeholder-transparent"
                      placeholder=" "
                    />
                    <label
                      for="email"
                      class="absolute left-0 top-1/2 -translate-y-1/2  text-white text-19 font-light
                            transition-all duration-200 ease-out
                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-focus:-translate-y-full
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-19
                            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-full peer-not-placeholder-shown:text-19 peer-not-placeholder-shown:text-white"
                    >
                      Email
                    </label>
                  </div>
                  </div>

                
                <div className="flex gap-12 w-full mb-6 xl:mb-8 3xl:mb-15">
                  <div class="relative w-full">
                    <input
                      id="organization"
                      type="text"
                      class="peer w-full bg-transparent text-19 border-0 border-b border-white/30 py-3 
                            focus:border-white text-white focus:outline-none
                            placeholder-transparent"
                      placeholder=" "
                    />
                    <label
                      for="organization"
                      class="absolute left-0 top-1/2 -translate-y-1/2  text-white text-19 font-light
                            transition-all duration-200 ease-out
                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-focus:-translate-y-full
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-19
                            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-full peer-not-placeholder-shown:text-19 peer-not-placeholder-shown:text-white"
                    >
                      Your Organization
                    </label>
                  </div>

                
                  <div class="relative w-full">
                    <input
                      id="country"
                      type="text"
                      class="peer w-full bg-transparent text-19 border-0 border-b border-white/30 py-3 
                            focus:border-white text-white focus:outline-none
                            placeholder-transparent"
                      placeholder=" "
                    />
                    <label
                      for="country"
                      class="absolute left-0 top-1/2 -translate-y-1/2  text-white text-19 font-light
                            transition-all duration-200 ease-out
                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-focus:-translate-y-full
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-19
                            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-full peer-not-placeholder-shown:text-19 peer-not-placeholder-shown:text-white"
                    >
                      Country
                    </label>
                  </div>
                </div>
                   <div className="relative mb-6 xl:mb-8 3xl:mb-15">
      {/* Floating Label */}
      <label
        className={`
          absolute left-0 transition-all duration-200 text-white text-19 font-light
          pointer-events-none
          ${subject
            ? "top-0 -translate-y-full text-xs text-white"
            : "top-1/2 -translate-y-1/2 "
          }
        `}
      >
        Subject
      </label>

      {/* Make this container act like peer */}
      <div
        className={`pt-3 peer ${
          subject ? "text-white" : "text-white/60"
        }`}
      >
        <Select
          options={options}
          value={subject}
          onChange={setSubject}
          styles={customStyles}
          placeholder="" // hide placeholder for floating label
          classNamePrefix="react-select"
        />
      </div>
    </div>

                
                  <div class="relative mb-6 lg:mb-12">
                    <textarea
                      id="message"
                      rows="3"
                      class="peer w-full bg-transparent text-19 border-0 border-b border-white/30 py-3 
                            focus:border-white text-white focus:outline-none
                            placeholder-transparent resize-none"
                      placeholder=" "
                    ></textarea>
                    <label
                      for="message"
                      class="absolute left-0 top-1/2 -translate-y-1/2  text-white text-19 font-light
                            transition-all duration-200 ease-out
                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-focus:-translate-y-full
                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-19
                            peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-full peer-not-placeholder-shown:text-19 peer-not-placeholder-shown:text-white"
                    >
                      Message
                    </label>
                  </div>
                
                  <button
                    type="submit"
                    class="   bg-white/25 text-white rounded-full hover:bg-gray-800 transition uppercase"
                  > 
                  <div class="relative p-[1px] rounded-full cursor-pointer">
                    <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[#30B6F9] to-[#1E45A2]"></div>

                    <div class="relative rounded-full bg-[#5974b7] py-2 px-4 text-white">
                    Send Message
                    </div>
                  </div>

                  </button>
                </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
 