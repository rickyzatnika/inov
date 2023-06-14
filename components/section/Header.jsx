/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const Header = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full bg-[url('/image/bg-cover.png')] bg-cover bg-right-top bg-no-repeat overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
          id="header"
        >
          <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-[#7CA6D6]/50 via-[#7CA6D6]/30 to-[#7CA6D6] z-10"></div>
          <div className="w-full h-full relative z-20 flex flex-col items-center gap-5 justify-between">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-zinc-800 titles tracking-wide text-2xl "
            >
              The Wedding Of
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-ease="linear"
              className="w-[46%]  p-2 flex items-center justify-center z-30"
            >
              <Image
                src="/image/avatar.jpeg"
                alt=""
                width={250}
                height={250}
                priority
                className="w-80 h-auto relative object-cover shadow-md shadow-black  rounded-full "
              />
            </div>
            <div className="text-center flex items-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-5xl md:text-4xl font-[parisienne]  px-2 font-semibold bg-gradient-to-r from-zinc-800 via-[#3d3d3d] to-zinc-600 bg-clip-text text-transparent py-2 "
              >
                Inov
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="alex bg-gradient-to-r from-zinc-800 via-[#363636] to-zinc-600  bg-clip-text text-transparent  text-3xl "
              >
                &
              </p>
              <h4
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-5xl md:text-4xl   px-2 font-semibold bg-gradient-to-r to-zinc-800 via-[#3f3f3f] from-zinc-600 font-[parisienne]   bg-clip-text text-transparent py-2"
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
