export default function Title(props) {
  return (
    <div className="flex flex-col items-start mb-5">
      <h1 className="font-bold text-left text-2xl">{props.text}</h1>
      <p className="italic text-left text-md leading-6 text-gray-600">
        {props.date}
      </p>
    </div>
  );
}
