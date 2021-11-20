import Layout from "../components/Layout";
import Title from "../components/Title";
import Link from "next/link";
import { getAllPosts, parseDate } from "../lib/utils";

export default function Writing(props) {
  const posts = props.posts.map((post) => (
    <Post
      key={post.slug}
      slug={post.slug}
      title={post.title}
      date={post.date}
    />
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
  let posts = await getAllPosts();
  posts = posts.map((post) => {
    return {
      title: post.title,
      slug: `${post.id}`,
      date: parseDate(post.updated),
    };
  });
  return {
    props: { posts },
  };
}
