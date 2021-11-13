import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Title from "./Title";

export default function Layout(props) {
  return (
    <div className="">
      <Head>
        {props.page ? (
          <title> {props.page} | Michael Zhu </title>
        ) : (
          <title>Michael Zhu</title>
        )}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <main className="w-10/12 mx-auto md:w-3/5 py-10">
        <Link href="/">
          <a className="text-black font-bold text-left text-3xl">Michael Zhu</a>
        </Link>
        <div className="my-10 w-full flex flex-col items-start justify-center md:flex-row">
          <Navbar />
          {props.children}
        </div>
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="text-lg mb-5 w-full flex justify-start md:w-min md:flex-col md:mr-20">
      <Link href="/">
        <a className="text-black mr-3 mb-1">About</a>
      </Link>
      <Link href="/projects">
        <a className="text-black mr-3 mb-1">Projects</a>
      </Link>
      <Link href="/writing">
        <a className="text-black mr-3 mb-1">Writing</a>
      </Link>
    </nav>
  );
}
