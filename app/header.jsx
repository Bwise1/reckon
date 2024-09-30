import React from "react";
import Image from "next/image";
import logo from "@/public/images/reckonLogo.png";

function Header() {
  return (
    <div className="h=20 w-fit pt-16 left-0 right-0 mx-auto">
      <Image src={logo} alt="logo" width={52} height={52} />
    </div>
  );
}

export default Header;
