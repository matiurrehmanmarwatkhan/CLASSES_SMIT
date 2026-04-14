function Main(props) {
  return (
    <div
      className="w-72 p-6 rounded-3xl 
                bg-gradient-to-br from-blue-500 to-indigo-600 
              text-white text-[20px] shadow-2xl 
                transform transition duration-500 
                hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
    >
      <h1 className="font-bold tracking-wide mb-3">Name: {props.name}</h1>
      <br />

      <h1 className="font-semibold">Village: {props.village}</h1>
    </div>
  );
}
export default Main;
