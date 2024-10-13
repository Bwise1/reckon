import React from "react";
import Image from "next/image";
import Phone from "@/public/images/phoneMockUp.png";
import androidQr from "@/public/images/androidQr.png";
import appleQr from "@/public/images/appleQr.png";
import Link from "next/link";

function Download() {
  return (
    <section
      className="bg-reckonBlueGreen lg:h-[789px] md:h-[600px] sm:h-full"
      id="download-section"
    >
      <div className="grid md:grid-cols-2 lg:gap-[60px]  h-full w-full container">
        <div className="flex flex-col justify-center w-full gap-6">
          <h2 className="text-white md:text-left text-center">
            Download Reckon IO Beta
          </h2>
          <p className="lg:text-2xl lg:leading-[32px] md:text-lg md:leading-normal font-medium text-sm sm:text-lg leading-[14px] md:text-left text-center">
            Easily calculate materials for your construction projects.Use Reckon
            IO Beta to quickly determine the number of blocks, cement, fine, and
            coarse aggregates required for concrete works.
          </p>
          <div className="hidden md:flex flex-row gap-6 mt-3">
            <div className="flex flex-col items-center justify-center gap-6 ">
              {" "}
              <Image
                src={appleQr}
                alt="qr code to download app"
                width={200}
                height={200}
              />
              <span className="text-white font-bold text-center text-2xl">
                Apple Users
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 ">
              {" "}
              <Image
                src={androidQr}
                alt="qr code to download app"
                width={200}
                height={200}
              />
              <span className="text-white font-bold text-center text-2xl">
                Android Users
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:flex-row gap-3 md:hidden pt-6 pb-10">
            <Link
              href="/"
              className=" h-[59px] font-semibold text-reckonBlueGreen bg-white flex items-center justify-center rounded-[10px]  w-[198px]  "
            >
              Download for Iphone
            </Link>
            <Link
              href="/"
              className=" h-[59px] font-semibold flex items-center bg-transparent border border-white justify-center rounded-[10px]  w-[198px] "
            >
              Download for Android
            </Link>
          </div>
        </div>
        <div className="relative row-start-1 md:col-start-2 md:h-full h-[500px] sm:h-[600px]">
          <div className="absolute w-full z-20 lg:h-[940px] md:h-[700px] h-[500px] sm:h-[600px] md:-top-10 lg:-top-20 -top-20">
            <div className="relaive h-full">
              <Image
                src={Phone}
                alt="phone Image"
                fill
                className="object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
