import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import frontend from "../../assets/images/fontendImg.png";
import backend from "../../assets/images/backendImg.png";

const Additional = () => {
  return (
    <section id="additional">
      <div className="container lg:pt-5">
        {/* Topic and sub content  */}
        <div className="text-center">
          <h2 className="text-headingColor font-[700] text-[2rem] mb-5">
            Additional passions
          </h2>

          <p className="1g:max-w-[600px] lg:mx-auto Otext-headingColor font-[500] text-[16px] leading-7 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            doloribus esse iure sint, ex nostrum voluptatum minima repellat?
            Tempora eaque quam corporis animi!
          </p>
        </div>
        {/* diagram start */}
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =—————— vertical line in the middle ——— */}
              <div
                className="hidden absolute w-1 sm:block bg-indigo-300 h-full
              left-1/2 transform -translate-x-1/2"
              ></div>
              {/* box card left*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl">
                          Front-End Developer
                        </h3>
                        <img src={frontend} alt="" />
                        <p className="text-xs text-smallTextColor group-hover:text-white group-hover:font-medium text-center">
                          (Sass, Bootstrap, Tailwind)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* box card right*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 text-center"
                      >
                        <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl">
                          Back-End Developer
                        </h3>
                        <img src={backend} alt="" />

                        <p
                          className="text-xs text-smallTextColor group-hover:text-white
          group-hover:font-medium"
                        >
                          (NodeJS, Laravel, Codeigniter)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additional;
