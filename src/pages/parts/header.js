import React from "react";
import propTypes from 'prop-types';

import {useRouter} from 'next/router';

import Link from "next/link";

// Import Logo
import Logo from "public/images/logo.svg";

export default function header({ onLight }) {
    const linkColor = onLight ? "text-gray-900" : "text-white";

    const router = useRouter();

    const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` 
    : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`; 
    const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header className="flex justify-between">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex justify-center my-auto">
        <li className="h-min w-min px-6 py-3">
          <Link href="/">
            <a className="text-white hover:text-teal-500 text-lg"
              /* className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg",
              ].join(" ")} */
            >
              Home
            </a>
          </Link>
        </li>
        <li className="h-min w-min px-6 py-3">
          <Link href="/">
            <a className="text-white hover:text-teal-500 text-lg" 
            >
              Pricing
            </a>
          </Link>
        </li>
        <li className="h-min w-min px-6 py-3">
          <Link href="/">
            <a className="text-white hover:text-teal-500 text-lg" 
            >
              Features
            </a>
          </Link>
        </li>
        <li className="h-min w-min px-6 py-3">
          <Link href="/">
            <a className="text-white hover:text-teal-500 text-lg" 
            >
              Story
            </a>
          </Link>
        </li>
        <li className="h-min w-min px-6 py-3">
            <a
            target="_blank" rel="noopener noreferrer" href={linkCTA} 
              className="bg-indigo-700 hover-bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3"
            >
              {textCTA}
            </a>
        </li>
      </ul>
    </header>
  );
}

header.propTypes = {
    onLight: propTypes.bool,
}
