export default function ExternalLink(props) {
  return (
    <>
      {" "}
      <a {...props} href={props.href} target="_blank">
        {props.children}
      </a>
      {props.trail && " "}
    </>
  );
}
