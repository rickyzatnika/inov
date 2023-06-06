import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const Intro = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="profile"
          className="w-full min-h-5xl py-14 bg-white overflow-hidden relative text-center leading-relaxed"
        >
          <div className="z-10 absolute opacity-50 -top-12 left-0">
            <Image
              src="/image/orn-top-left.png"
              alt=""
              width={210}
              height={210}
              objectFit="contain"
            />
          </div>
          <div className="z-10 absolute opacity-50 -bottom-12 right-0">
            <Image
              src="/image/orn-bottom-right.png"
              alt=""
              width={210}
              height={210}
              objectFit="contain"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full h-full relative z-40 p-8 "
          >
            <q className="text-center text-sm mb-4 text-zinc-700">
              Dan nikahkanlah orang-orang yang masih membujang di antara kamu,
              dan juga orang-orang yang layak (menikah) dari hamba-hamba
              sahayamu yang laki-laki dan perempuan. Jika mereka miskin, Allah
              akan memberi kemampuan kepada mereka dengan karunia-Nya.
            </q>
            <p className="mt-6 font-[parisienne] text-xl">
              {" "}
              QS. An-Nur Ayat 32
            </p>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Intro;
