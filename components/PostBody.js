import markdownStyles from "./post-styles.module.css";
import Head from "next/head";

export default function PostBody({ content }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <div
        className={markdownStyles["post"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
