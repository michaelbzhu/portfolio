import markdownStyles from "./post-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div
      className={markdownStyles["post"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
