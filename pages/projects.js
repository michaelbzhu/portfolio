import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Projects(props) {
  const projects = props.projects.map((proj) => (
    <Project href={proj.href} title={proj.title} description={proj.desc} />
  ));
  return (
    <Layout page="Projects">
      <div className="w-full">
        <Title text="Projects" />
        {projects}
      </div>
    </Layout>
  );
}

function Project(props) {
  return (
    <>
      <p className="text-left text-lg leading-7 mt-3 font-semibold">
        <a
          className="text-blue-600 hover:text-blue-800 hover:underline"
          href={props.href}
          target="_blank"
        >
          {props.title}
        </a>
      </p>
      <p className="text-left text-md leading-6 mb-3 pb-1 text-gray-600">
        {props.description}
      </p>
    </>
  );
}

export async function getStaticProps() {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "appLlp2P8YUJQ4hUZ"
  );
  var projects = await base("projects")
    .select({
      view: "Grid view",
    })
    .all();
  projects = projects.map((obj) => ({
    title: obj["fields"]["title"],
    href: obj["fields"]["link"],
    desc: obj["fields"]["description"],
  }));
  return {
    props: {
      projects,
    },
  };
}
