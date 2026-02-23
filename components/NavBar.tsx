import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div
      className="h-16 mt-20 bg-blue-300 flex rounded-t-lg sticky
        items-center sm:w-200 sm:justify-between"
    >
      <Image
        src={"/images/logo1.jpg"}
        alt="logo"
        width={50}
        height={50}
        className="rounded-full ml-2 shadow-2xl"
      />
      <article className="sm:text-lg pl-4 text-center sm:flex sm:items-center ">
        True Social Marketing{" "}
        <p className="px-4 text-sm sm:text-lg">
          Web Design | Digital Marketing | SEO
        </p>
      </article>
    </div>
  );
};

export default NavBar;
