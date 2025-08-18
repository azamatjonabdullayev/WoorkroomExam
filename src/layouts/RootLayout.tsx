import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="flex p-5 gap-[30px] items-center h-screen bg-[#f4f9fd] ">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-[50px] px-10 relative">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
