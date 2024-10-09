import React from "react";
import Image from "next/image";
import logo from "@/public/images/reckonLogo.png";
import logoDark from "@/public/images/reckonLogoWhite.png";

function Header() {
  return (
    <div className="h=20 w-fit pt-16 left-0 right-0 mx-auto">
      <Image
        className="dark:hidden"
        src={logo}
        alt="logo"
        width={52}
        height={52}
      />
      <Image
        className="light:hidden"
        src={logoDark}
        alt="logo"
        width={52}
        height={52}
      />
    </div>
  );
}

export default Header;
