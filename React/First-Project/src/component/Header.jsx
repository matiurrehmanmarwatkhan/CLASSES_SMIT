function Header() {
  return (
    <header
      className=" flex justify-center items-center px-10 py-5 
bg-gradient-to-br from-blue-900 to-blue-700 
shadow-2xl rounded-b-3xl"
    >
      <div className="flex gap-12 text-white font-semibold tracking-wide">
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-xl 
      bg-white/5 backdrop-blur-md shadow-lg
      hover:bg-white hover:text-blue-400
      hover:-translate-y-1 hover:scale-110
      transition duration-300 transform"
        >
          <i className="fa-solid fa-home text-lg"></i>
          Home
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-xl 
      bg-white/5 backdrop-blur-md shadow-lg
      hover:bg-white hover:text-blue-400
      hover:-translate-y-1 hover:scale-110
      transition duration-300 transform"
        >
          <i className="fa-solid fa-cog text-lg"></i>
          Setting
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-xl 
      bg-white/5 backdrop-blur-md shadow-lg
      hover:bg-white hover:text-blue-400
      hover:-translate-y-1 hover:scale-110
      transition duration-300 transform"
        >
          <i className="fa-solid fa-database text-lg"></i>
          Server
        </a>
      </div>
    </header>
  );
}
export default Header;
