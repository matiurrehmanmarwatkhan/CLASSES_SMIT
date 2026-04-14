function DashBoard() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-2xl shadow-2xl transform transition duration-500">
      <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">
        Dashboard
      </h2>

      <div className="flex flex-col gap-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white shadow-lg 
      hover:bg-white hover:text-blue-900 hover:shadow-2xl 
      transform hover:-translate-y-1 hover:scale-105 transition duration-300"
        >
          <i className="fa-solid fa-home text-lg"></i>
          Home
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white shadow-lg 
      hover:bg-white hover:text-blue-900 hover:shadow-2xl 
      transform hover:-translate-y-1 hover:scale-105 transition duration-300"
        >
          <i className="fa-solid fa-cog text-lg"></i>
          Setting
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white shadow-lg 
      hover:bg-white hover:text-blue-900 hover:shadow-2xl 
      transform hover:-translate-y-1 hover:scale-105 transition duration-300"
        >
          <i className="fa-solid fa-database text-lg"></i>
          Server
        </a>
      </div>
    </div>
  );
}
export default DashBoard;
