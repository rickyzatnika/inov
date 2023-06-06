import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7CA6D6] text-zinc-200 flex relative w-full h-28 lg:h-auto py-2 flex-nowrap items-start lg:items-center justify-center gap-1">
      <p className="text-sm">Powered By : </p>
      <Link href="https://webqodes.com" className="text-sm">
        WebQodes
      </Link>
    </footer>
  );
};

export default Footer;
