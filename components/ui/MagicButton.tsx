import React from "react";

const MagicButton = ({
  title,
  // icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-50 mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EBECEE_0%,#0E0E11_50%,#8E8F90_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-[#303032] px-7 text-xs md:text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {/* {position === "left" && icon} */}
        {title}
        {/* {position === "right" && icon} */}
      </span>
    </button>
  );
};

export default MagicButton;
