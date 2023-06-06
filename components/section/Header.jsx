/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
import { images } from "../MyImage";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    fade: true,
    className: "w-full h-full ",
  };
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full bg-[url('/image/bg-cover.png')] bg-cover bg-right-top bg-no-repeat overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
          id="header"
        >
          <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-[#7CA6D6]/50 via-[#7CA6D6]/30 to-[#7CA6D6] z-10"></div>
          <div className="w-full h-full relative z-20 flex flex-col items-center gap-2 justify-between">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-stone-800/80 titles font-semibold tracking-widest text-xl sm:text-xl"
            >
              The Wedding Of
            </h1>
            {/* <div
              // data-aos="fade-up"
              // data-aos-duration="3000"
              className="w-full my-6 z-10 relative  "
            >
              <img
                src="/img/mempelai.png"
                alt=""
                className="w-32 mx-auto h-auto relative p-1 object-cover   "
              />
            </div> */}
            <div className="text-center flex items-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-5xl md:text-4xl font-[parisienne]  px-2 font-semibold bg-gradient-to-r from-zinc-800 via-[#868686] to-zinc-600 bg-clip-text text-transparent py-2 "
              >
                Inov
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="alex bg-gradient-to-r from-zinc-800 via-[#868686] to-zinc-600  bg-clip-text text-transparent  text-3xl "
              >
                &
              </p>
              <h4
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-5xl md:text-4xl   px-2 font-semibold bg-gradient-to-r to-zinc-800 via-[#868686] from-zinc-600 font-[parisienne]   bg-clip-text text-transparent py-2"
              >
                Irsan
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col relative z-50 items-center gap-1 justify-center"
            >
              <div className="mouse"></div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Header;
