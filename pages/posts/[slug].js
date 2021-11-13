import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import Title from "../../components/Title";
import Image from "next/image";

export default function Article({ post }) {
  return (
    <Layout page={post.title}>
      <div className="w-full">
        <Title text={post.title} date={post.date} />
        <PostBody content={post.html} />
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const GhostContentAPI = require("@tryghost/content-api");
  const api = new GhostContentAPI({
    url: process.env.GHOST_ADMIN_DOMAIN,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: "v3",
  });
  const posts = await api.posts.browse();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const GhostContentAPI = require("@tryghost/content-api");
  const api = new GhostContentAPI({
    url: process.env.GHOST_ADMIN_DOMAIN,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: "v3",
  });
  let post = await api.posts.read(
    { slug: `${params.slug}` },
    { formats: ["html", "plaintext"] }
  );
  //console.log(post);
  const d = new Date(post.published_at).toDateString();
  post = {
    title: post.title,
    html: post.html,
    date: d.substr(d.indexOf(" ") + 1),
  };
  // Pass post data to the page via props
  return { props: { post } };
}
