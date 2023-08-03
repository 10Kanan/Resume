import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-6">
      <span className="text-headingColor font-semibold text-15px">
        Contact Me:
      </span>
      <span className="w-[35px] h-[35px] bg-[#F2F2F2] p-1 rounded-[50px] cursor-pointer text-center">
        <a href="#github" className="text-black-300 font-semibold text-[18px]">
          <i className="ri-github-line"></i>
        </a>
      </span>
      <span className="w-[35px] h-[35px] bg-[#F2F2F2] p-1 rounded-[50px] cursor-pointer text-center">
        <a href="#mail" className="text-black-300 font-semibold text-[18px]">
          <i className="ri-mail-line"></i>
        </a>
      </span>
      <span className="w-[35px] h-[35px] bg-[#F2F2F2] p-1 rounded-[50px] cursor-pointer text-center">
        <a
          href="#facebook"
          className="text-black-300 font-semibold text-[18px]"
        >
          <i className="ri-facebook-line"></i>
        </a>
      </span>
      <span className="w-[35px] h-[35px] bg-[#F2F2F2] p-1 rounded-[50px] cursor-pointer text-center">
        <a
          href="#instagram"
          className="text-black-300 font-semibold text-[18px]"
        >
          <i className="ri-instagram-line"></i>
        </a>
      </span>
    </div>
  );
};

export default Contact;
