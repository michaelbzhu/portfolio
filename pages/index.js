import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiFile,
} from "react-icons/fi";
import Layout from "../components/Layout";
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
          Third year CS student at
          <ExternalLink
            href="https://cs.berkeley.edu/"
            className="underline text-black decoration-blue-500 decoration-2"
          >
            UC Berkeley
          </ExternalLink>
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          Head of Engineering at
          <ExternalLink
            href="https://dormroomfund.com/"
            className="underline text-black decoration-purple-500 decoration-2"
          >
            Dorm Room Fund
          </ExternalLink>
          , a student run venture fund that invests in the best student founders
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          Occasionally jot down some random
          <ExternalLink
            href="https://thoughts.michaelbzhu.com"
            className="underline text-black decoration-cyan-500 decoration-2"
          >
            thoughts
          </ExternalLink>
        </p>
        <h2 className="text-left text-2xl font-bold leading-7 mt-10">
          I'm currently interested in
        </h2>
        <p className="text-left text-lg leading-7 my-3">
          How to be a{" "}
          <ExternalLink
            href="https://www.julian.com/blog/vanity-metrics"
            className="text-black underline decoration-pink-500 decoration-2"
          >
            better
          </ExternalLink>{" "}
          <ExternalLink
            href="https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer"
            className="text-black underline decoration-pink-500 decoration-2"
          >
            software
          </ExternalLink>{" "}
          <ExternalLink
            href="https://thezbook.com/"
            className="text-black underline decoration-pink-500 decoration-2"
          >
            engineer
          </ExternalLink>
        </p>

        <p className="text-left text-lg leading-7 my-3">
          <ExternalLink
            href="https://open.spotify.com/playlist/0jCdplasbHs0OZMEu1VOUI?si=20009ff1d9dc4814"
            className="text-black underline decoration-pink-500 decoration-2"
          >
            Chinese
          </ExternalLink>
          ,
          <ExternalLink
            href="https://noahpinion.substack.com/"
            className="text-black underline decoration-pink-500 decoration-2"
          >
            economics
          </ExternalLink>
          , and
          <ExternalLink
            href="https://danwang.co/"
            className="text-black underline decoration-pink-500 decoration-2"
          >
            chinese economics
          </ExternalLink>
        </p>

        <h2 className="text-left text-2xl font-bold leading-7 mt-10">
          Selected Projects
        </h2>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://ugly.video"
            className="text-black underline decoration-emerald-500 decoration-2"
            trail
          >
            ugly.video
          </ExternalLink>
          - implemented browser based video conferencing using WebRTC
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://michael-docs.s3.us-west-1.amazonaws.com/robust_image_classifier.pdf"
            className="text-black underline decoration-emerald-500 decoration-2"
            trail
          >
            Improving Free Adversarial Training
          </ExternalLink>{" "}
          - researched methods of reducing neural network vulnerablity to FGSM
          attacks
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://medium.com/ludwig-ai/hyperparameter-optimization-with-ludwig-6e31272e43fb"
            className="text-black underline decoration-emerald-500 decoration-2"
            trail
          >
            Sentiment Analysis with Ludwig
          </ExternalLink>
          - comparative analysis of CNN vs LSTM vs BERT performance using
          Ludwig's deep learning toolkit
        </p>
        <p className="text-left text-lg leading-7 my-3 ">
          <ExternalLink
            href="https://supply-website.vercel.app/"
            className="text-black underline decoration-emerald-500 decoration-2"
            trail
          >
            Supply
          </ExternalLink>
          - another failed pandemic social app. Created an iOS app that enables
          community sharing of essential items
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
