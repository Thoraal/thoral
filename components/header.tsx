"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import Image from "next/image";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-2 px-5 md:px-20"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex md:items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={50}
              className="my-3 mx-auto md:mx-0"
            />
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-400 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
