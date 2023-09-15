'use client'
import React from "react";
import Image from "next/image";
import Link from 'next/link'

const Nav = () => {

  return (
    <div className="flex flex-row justify-between shadow-sm">
      <div>
        <Image
          src="/newslogo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <nav className="flex justify-items-center" >
        <ul className="flex flex-row mr-2 justify-items-center">
          <li className="mx-2"><Link href="/">Home</Link></li>
          <li className="mx-2"><Link href="/news">News</Link></li>
          <li className="mx-2"><Link href="/register">Register</Link></li>
          <li className="mx-2"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
