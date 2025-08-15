import React from "react";
import { Link } from "react-router-dom";
import projectIcon from "../assets/icons/projects-icon.svg";
import MessangerIcon from "../assets/icons/MessangerIcons.svg";
import supportImg from "../assets/icons/support.svg";
import { RxDashboard } from "react-icons/rx";
import { IoCalendarClear } from "react-icons/io5";
import { FaPlaneUp } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-full max-w-60 w-full bg-white rounded-3xl flex flex-col p-6 font-[Nunito]">
      {/* Logo */}
      <div className="mb-8">
        <Link to={"/"} className="block w-full cursor-pointer">
          <img src="/logo.svg" alt="logo" className="w-[50px] h-[50px]" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="font-[Nunito] font-semibold text-base text-[#7D8592] space-y-2">
          <li>
            <Link
              to={"/"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <RxDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/projects"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <img src={projectIcon} alt="projects" className="w-5 h-5" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/calendar"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <IoCalendarClear className="w-5 h-5" />
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/vacations"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <FaPlaneUp className="w-5 h-5" />
              <span>Vacations</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/employees"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <MdPeopleAlt className="w-5 h-5" />
              <span>Employees</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/messenger"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <img
                src={MessangerIcon}
                alt="MessengerIcon"
                className="w-5 h-5"
              />
              <span>Messenger</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/info-portal"}
              className="flex items-center h-12 gap-4 px-4 transition-all duration-200 rounded-xl hover:bg-gray-50"
            >
              <FaRegFolderOpen className="w-5 h-5" />
              <span>Info Portal</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Support Section */}
      <div className="mt-auto mb-6">
        <div className="w-full bg-[#EBF3FF] rounded-2xl p-4 relative">
          <img
            src={supportImg}
            alt="support"
            className="absolute z-0 object-contain w-24 h-24 -top-12 right-2"
          />
          <div className="relative z-10 pt-6">
            <button className="w-full h-12 text-white font-semibold flex items-center justify-center gap-2 bg-[#3F8CFF] rounded-xl hover:bg-[#2D7AE6] transition-colors duration-200">
              <BiMessageRounded className="w-5 h-5" />
              <span>Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="text-[#7D8592] font-semibold flex items-center gap-4 h-12 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
        <FiLogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
