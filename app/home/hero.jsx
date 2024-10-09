import React from "react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className=" h-screen min-h-[550px] lg:max-h-[900px] bg-cover bg-no-repeat relative pt-2">
      <div className="container h-full flex items-center flex-col justify-center gap-7">
        {/* Hero Text */}
        <h1 className="w-[287px] sm:w-[400px] lg:w-[755px] text-center ">
          Estimate Smarter, Manage Better with Reckon IO
        </h1>
        <p className="w-[265px] sm:w-[500px] lg:w-[862px] text-center lg:text-2xl lg:leading-[29px] text-sm sm:text-lg">
          We are building a smart solution to streamline construction cost and
          material management. The beta version is live, and your feedback has
          been valuable. Stay tuned for version 1.0 featuring real-time pricing
          updates and enhanced features!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/" className="pry-btn btn-base mt-5 sm:mx-0 mx-auto">
            Try Reckon Beta Now
          </Link>
          <Link href="/" className="sec-btn btn-base mt-5 sm:mx-0 mx-auto">
            Stay Updated on Version 1.0
          </Link>
        </div>
      </div>
      {/* mom hugging child image */}
    </div>
  );
}

export default Hero;
