import Layout from "../components/Layout";
import Title from "../components/Title";
import Link from "next/link";

export default function Writing(props) {
  const posts = props.posts.map((post) => (
    <Post slug={post.slug} title={post.title} date={post.date} />
  ));
  return (
    <Layout page="Writing">
      <div className="w-full">
        <Title text="Writing" />
        {posts}
      </div>
    </Layout>
  );
}

function Post(props) {
  return (
    <div className="flex flex-col justify-between mb-2.5 lg:flex-row">
      <p className="lg:w-3/4 text-left text-lg leading-6 font-medium">
        <Link href={`/posts/${props.slug}`}>
          <a className="text-black">{props.title}</a>
        </Link>
      </p>
      <p className="w-auto italic text-left text-md leading-6 text-gray-600">
        {props.date}
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const GhostContentAPI = require("@tryghost/content-api");
  const api = new GhostContentAPI({
    url: process.env.GHOST_ADMIN_DOMAIN,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: "v3",
  });
  let posts = await api.posts.browse();
  posts = posts.map((post) => {
    const d = new Date(post.published_at).toDateString();
    return {
      title: post.title,
      slug: post.slug,
      date: d.substr(d.indexOf(" ") + 1),
    };
  });
  return {
    props: { posts },
  };
}
