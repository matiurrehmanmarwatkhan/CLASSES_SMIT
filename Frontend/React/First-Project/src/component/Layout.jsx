import { Children } from "react";
import Header from "./Header";
// import DashBoard from "./DashBoard";
// import Main from "./Main";

function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar - 20% */}
      <div className="w-[20%]">
        <DashBoard />
      </div>

      {/* Right Side - 80% */}
      <div className="w-[80%] flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 flex justify-center items-center bg-gray-100">
          <Main name="Mati Ur Rehman" village="Rawalpindi" />
          {Children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
