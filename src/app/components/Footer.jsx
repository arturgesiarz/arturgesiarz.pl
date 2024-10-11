import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 max-w-full flex  items-center justify-between">
        <span>
          <Image src="/images/logo.png" alt="my image" width={75} height={75} />
        </span>
        <p className="text-slate-600 text-white ">Artur Gęsiarz ©</p>
      </div>
    </footer>
  );
};

export default Footer;
