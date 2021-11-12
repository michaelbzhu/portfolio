export default function ExternalLink(props) {
  return (
    <>
      {" "}
      <a
        className="text-blue-600 hover:underline hover:text-blue-800"
        href={props.href}
        target="_blank"
      >
        {props.children}
      </a>
      {props.trail && " "}
    </>
  );
}
