import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import Title from "../../components/Title";
import Image from "next/image";
import axios from "axios";
import {
  markdownToHTML,
  getAllPosts,
  getPost,
  parseDate,
} from "../../lib/utils";

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
  // Collect posts
  let posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  let post = await getPost(params.slug);
  const htmlContent = await markdownToHTML(post.body);
  post = {
    title: post.title,
    html: htmlContent,
    date: parseDate(post.updated),
  };
  // Pass post data to the page via props
  return { props: { post } };
}
