import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiFile,
} from "react-icons/fi";
import ExternalLink from "../components/ExternalLink";
import Image from "next/image";
import Head from "next/head";
import profilePic from "../public/me.jpg";

export default function Home() {
  return (
    <main className="w-10/12 mx-auto lg:w-2/5 md:w-3/5 py-10">
      <Head>
        <title>Michael Zhu</title>
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
      <div className="w-full text-center">
        <div className="my-10">
          <Image
            src={profilePic}
            width="300"
            height="300"
            alt="Michael Zhu"
            responsive="true"
            priority="true"
            className="rounded-full"
          />
        </div>
        <h2 className="text-left text-3xl font-bold leading-7 my-3">
          Hi, I'm Michael
        </h2>
        <p className="text-left text-lg leading-7 my-3">
          Currently a software engineer at
          <ExternalLink
            href="https://cs.berkeley.edu/"
            className="underline text-black decoration-slate-500 decoration-2"
          >
            Retool
          </ExternalLink>
        </p>
        <p className="text-left text-lg leading-7 my-3">
          Previously studied computer science at <ExternalLink
            href="https://cs.berkeley.edu/"
            className="underline text-black decoration-blue-500 decoration-2"
          >
            UC Berkeley
          </ExternalLink>.
        </p>
        <h2 className="text-left text-2xl font-bold leading-7 mt-10">Links</h2>
        <p className="text-left text-lg leading-7 my-3 ">
          me at michaelbzhu.com
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://twitter.com/michaelbzhu"
            className="text-black underline decoration-2"
          >
            Twitter
          </ExternalLink>
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://github.com/michaelbzhu"
            className="text-black underline decoration-2"
          >
            Github
          </ExternalLink>
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://www.linkedin.com/in/michaelbzhu"
            className="text-black underline decoration-2"
          >
            Linkedin
          </ExternalLink>
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="/resume.pdf"
            className="text-black underline decoration-2"
          >
            Resume
          </ExternalLink>
        </p>
        {/* <div className="w-min justify-center items-center flex flex-col">
          <Icon href="https://github.com/michaelbzhu">
            <FiGithub />
          </Icon>
          <Icon href="https://www.linkedin.com/in/michaelbzhu">
            <FiLinkedin />
          </Icon>
          <Icon href="https://twitter.com/michaelbzhu">
            <FiTwitter />
          </Icon>
          <Icon href="mailto:michaelbzhu@berkeley.edu">
            <FiMail />
          </Icon>
          <Icon href="/resume.pdf">
            <FiFile />
          </Icon>
        </div> */}
      </div>
    </main>
  );
}

function Icon(props) {
  return (
    <div className="text-2xl p-5">
      <a className="text-black" href={props.href} target="_blank">
        {props.children}
      </a>
    </div>
  );
}
