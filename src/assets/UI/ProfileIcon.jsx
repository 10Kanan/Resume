import React from "react";

const ProfileIcon = () => {
  return (
    <div id="logo">
      <div className="flex items-center gap-[1px]">
        <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
          P
        </span>

        <div className="leading-[20px] ml-1">
          <h2 className="text-xl text-smallTextColor font-[700]">Phornlapat</h2>
          <p className="text-smallTextColor text-[14px] font-[500]">resume</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
