/* eslint-disable @next/next/no-img-element */
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
import Navbar from "../Navbar";

const Aside = () => {
  return (
    <>
      <AOSWrapper>
        <div className="w-full bg-gradient-to-t from-[#7CA6D6]/50 via-[#7CA6D6]/30 to-[#7CA6D6] overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
          {/* <Canvas /> */}
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="fixed z-40 top-6 titles text-zinc-700 text-2xl "
          >
            Wedding Invitation
          </div>

          <Navbar />
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-[36%]  p-1 flex items-center justify-center fixed  z-30"
          >
            <Image
              src="/image/avatar.jpeg"
              alt=""
              width={450}
              height={450}
              priority
              className="w-80 h-auto relative object-cover shadow-md shadow-black  rounded-full "
            />

            <div className="absolute  rounded-full bg-gradient-to-t from-[#ffffff] via-transparent to-[#FBFBFB] top-0 z-30 w-full h-full" />
          </div>

          <div className="flex flex-col gap-9 items-center justify-center fixed bottom-4 z-30">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-center flex gap-1 capitalize"
            >
              <h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl text-zinc-100 font-[parisienne] tracking-widest"
              >
                Inov
              </h1>
              <span className="text-5xl font-[parisienne] text-zinc-100">
                &
              </span>
              <h1 className="text-3xl text-zinc-100 font-[parisienne] tracking-widest">
                Irsan
              </h1>
            </div>
            <p className="titles text-zinc-700 py-0 text-2xl">5 Juli 2023</p>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Aside;
