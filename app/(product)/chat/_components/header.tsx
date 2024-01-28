import React from "react";

const Header = () => {
  return (
    <div className="bg-white rounded-t-lg w-full shadow-lg">
      <div className="flex p-4 gap-4">
        <img
          className="h-12 w-12"
          src="/images/ai-profile.svg"
          alt="Ai profile pic"
        ></img>
        <div className="flex-col ">
          <h1 className="font-semibold text-xl">Hi, I{"'"}m GILO 👋</h1>
          <h2 className="text-muted-foreground">I am here to assist you</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
