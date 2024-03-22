import React from "react";

const Header = () => {
  return (
    <div className="flex  relative ">
  <a className="flex items-center absolute" href="/">
    <img className="h-12 ml-6 mt-4" src="/images/home.png" alt="" />
    {/* <h2 className=" text-xl right-8 mt-4 absolute items-center ">DEV QUIZ</h2> */}
  </a>
</div>

  );
};

export default Header;
