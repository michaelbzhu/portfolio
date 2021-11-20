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
import profilePic from "../public/me.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <div className=" mb-10">
          <Image
            src={profilePic}
            width="300"
            height="300"
            alt="Michael Zhu"
            responsive="true"
            priority="true"
            className=""
          />
        </div>

        <p className="text-left text-xl leading-7 my-3">
          I'm studying computer science at
          <ExternalLink href="https://cs.berkeley.edu/">
            UC Berkeley
          </ExternalLink>
          .
        </p>
        <p className="text-left text-xl leading-7 my-3 ">
          My interests include startups, machine learning, web3, and product
          design. I’m currently the Head of Engineering at
          <ExternalLink href="https://dormroomfund.com/" target="_blank">
            Dorm Room Fund
          </ExternalLink>
          , a student run venture fund that invests in the best student
          founders.
        </p>
        <p className="text-left text-xl leading-7 my-3">
          I previously worked at
          <ExternalLink href="https://developer.amazon.com/en-US/alexa" trail>
            Amazon
          </ExternalLink>
          as a software engineering intern and at
          <ExternalLink href="https://riot.vc/" trail>
            Riot Ventures
          </ExternalLink>
          as a venture fellow.
        </p>
        <div className="justify-center items-center flex">
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
        </div>
      </div>
    </Layout>
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
