/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

import "animate.css";

const Profile = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full min-h-screen overflow-hidden bg-[url('/image/bg-cover.png')] bg-cover bg-right bg-no-repeat flex flex-col items-center justify-center py-24 lg:justify-between relative "
          id="profile"
        >
          <div className="text-center relative z-40 px-2 leading-relaxed mb-10">
            <h3
              data-aos="fade-down"
              data-aos-duration="1500"
              className="titles text-xl mb-3 text-[#222]"
            >
              Assalamu'alaikum Warohmatullahi Wabarokatuh
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-[#444]/80 text-sm"
            >
              Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud
              menyelenggarakan resepsi pernikahan putra-putri kami,
            </p>
          </div>
          <div className="absolute w-full h-full top-0 bg-gradient-to-t from-[#7CA6D6] via-[#7CA6D6]/70 to-[#7CA6D6]/80 z-20"></div>
          {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

          <div className="w-full relative  flex flex-col items-center justify-center  h-full  z-30">
            <div className="flex shadow-inner overflow-hidden w-[90%] bg-[#e9ecf0] p-6 sm:p-8 px-10 sm:px-14 shadow-black/20 flex-col justify-center gap-0 items-center relative mx-auto">
              <div className="absolute -top-2 left-0 w-full">
                <Image
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  src="/image/orn-top-left.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="absolute -top-2 right-0 ">
                <Image
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  src="/image/orn-top-right.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="absolute -bottom-4 -left-3 w-full">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  src="/image/orn-bottom-left.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="absolute -bottom-4 -right-3 ">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  src="/image/orn-bottom-right.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="relative overflow-hidden mb-4">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  src="/image/girl.png"
                  alt=""
                  width={100}
                  height={100}
                  objectFit="contain"
                  priority
                />
              </div>

              <div className="animated-element flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles text-2xl text-[#444] capitalize "
                >
                  Novelia Puspita
                </h2>
                <Link
                  href="https://instagram.com/rahmadi.irawansyah"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    size={22}
                    className="text-zinc-400 mb-2 animate-spin hover:animate-none"
                  />
                </Link>
                <div className="text-center text-[#222] ">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-zinc-500 text-lg"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles capitalize text-zinc-500 text-lg"
                  >
                    Bpk. Sundani{" "}
                  </p>
                  <p
                    className="text-zinc-500"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles capitalize text-zinc-500 text-lg"
                  >
                    Ibu endang sri pudjiastuti
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="brush text-6xl my-8 text-[#f5f5f5]  "
            >
              &
            </div>
            <div className="relative z-50 overflow-hidden shadow-inner bg-[#e9ecf0] p-6 sm:p-8 px-10 sm:px-14 w-[90%] shadow-black/20  flex flex-col items-center justify-center gap-0">
              <div className="absolute -top-2 left-0 w-full">
                <Image
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  src="/image/orn-top-left.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="absolute -top-2 right-0 ">
                <Image
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  src="/image/orn-top-right.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="absolute -bottom-4 left-0 w-full">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  src="/image/orn-bottom-left.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="absolute -bottom-4 right-0 ">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  src="/image/orn-bottom-right.png"
                  width={100}
                  height={75}
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
              <div className="relative overflow-hidden mb-4">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  src="/image/man.png"
                  alt=""
                  width={100}
                  height={100}
                  objectFit="contain"
                  priority
                />
              </div>

              <div className="flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles text-2xl text-[#444] capitalize "
                >
                  Irsan Suwanda
                </h2>
                <Link
                  href="https://instagram.com/dindanovitas"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    className="text-zinc-400 mb-2  animate-spin hover:animate-none"
                    size={22}
                  />
                </Link>
                <div className="text-center text-zinc-500">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-lg"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles capitalize text-lg"
                  >
                    Bpk. Iadang sutarda{" "}
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles capitalize text-lg"
                  >
                    Ibu ismiyati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Profile;
