import React from "react";
import Vecfooter from "../../images/Vecfooter.png";
import ProfileIcon from "../../UI/ProfileIcon";
import Contact from "../../UI/Contact";
const Footer = () => {
  return (
    <footer id="contact" className="relative pt-12 ">
      <div className="container  ">
        <div className="sm:flex items-center justify-between md:gap-8 pb-8">
          {/* - footer left start - */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-heading font-[600] mb-5 md:text-[2rem]">
              Please contact me if there are any problems.
            </h2>
            <ProfileIcon />
          </div>
          {/* - footer right start - */}
          <div className="w-full sm:w-1/2">
            <p className=" text-headingColor  leading-7 mt-4 sm:mt-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              autem! Illo voluptates totam omnis maiores inventore vero eveniet
            </p>

            <Contact />
          </div>
        </div>
        {/* - footer img - */}
        <img
          src={Vecfooter}
          alt="footer image"
          className="absolute mt-5 bottom-0 left-0 w-full object-cover z-[-1]"
        />
      </div>
    </footer>
  );
};

export default Footer;
