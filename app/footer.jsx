import React from "react";
import Link from "next/link";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-reckonBlue w-full py-5 md:h-60 lg:h-72 text-white lg:text-2xl md:text-lg text-xs">
      <div className="container h-full flex flex-col md:flex-row justify-between md:items-center gap-y-8">
        <div className="flex flex-col  ">
          <span className="font-bold lg:text-[40px] md:text-[32px] text-[24px] pb-5 leading-relaxed">
            Reckon IO
          </span>
          <nav className="hidden md:flex flex-row justify-start gap-5">
            <Link
              className="hover:text-sky-700 lg:text-3xl"
              href="https://www.linkedin.com/"
            >
              <CiLinkedin />
            </Link>

            <Link
              className="hover:text-pink-700 lg:text-3xl"
              href="https://www.instagram.com/"
            >
              <CiInstagram />
            </Link>
            <Link className="hover:text-slate-800" href="https://medium.com/">
              <BsTwitterX />
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <Link
            href="tel:+23409115083790"
            className="hover:text-reckonLightBlue"
          >
            +234 0 911 508 3790
          </Link>
          <Link
            href="mailto:hello@reckonio.com "
            className="hover:text-reckonLightBlue"
          >
            hello@reckonio.com
          </Link>
        </div>
        <nav className="md:hidden flex flex-row justify-start gap-5">
          <Link
            className="hover:text-sky-700 lg:text-3xl"
            href="https://www.linkedin.com/"
          >
            <CiLinkedin />
          </Link>

          <Link
            className="hover:text-pink-700 lg:text-3xl"
            href="https://www.instagram.com/"
          >
            <CiInstagram />
          </Link>
          <Link className="hover:text-slate-800" href="https://medium.com/">
            <BsTwitterX />
          </Link>
        </nav>
        <div className="flex flex-col gap-5">
          <span>Lagos, Nigeria</span>
          <span>© 2024 Reckon IO. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
