import { Calendar, MapPin } from "lucide-react";
import React, { type JSX } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import btn3Image from "/profile-3-btn.svg";
import projectImg from "/Project.svg";
import { Link } from "react-router-dom";

const MyProfile: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-between profile-header h-fit">
        <p className="text-4xl font-bold">My Profile</p>

        <button className="p-3 bg-white size-12 rounded-2xl mt-7">
          <IoSettingsOutline size={24} cursor={"pointer"} />
        </button>
      </div>

      <div className="flex gap-[30px] ">
        <section className="w-[264px] rounded-2xl p-4 bg-white">
          <div className="relative flex flex-col items-start justify-center ">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-20 h-20 border-4 border-white rounded-full shadow-md"
            />
            <button className="absolute size-11 p-2.5 rounded-full top-4 right-4 hover:bg-gray-100 bg-[#f4f9fd]">
              <FaRegEdit size={24} cursor="pointer" />
            </button>
            <h2 className="mt-4 text-2xl font-bold">Evan Yates</h2>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>

          <hr className="mt-7 text-[#E4E6E8]" />

          <div className="mt-6 space-y-5">
            <h3 className="mb-2 text-lg font-bold">Main info</h3>

            <div className="space-y-3">
              <p className="text-sm font-bold text-[#7D8592]">Position</p>
              <input
                value="UI/UX Designer"
                readOnly
                className="w-full p-2 text-sm border rounded-lg"
              />

              <p className="text-sm font-bold text-[#7D8592]">Company</p>
              <input
                value="Cadabra"
                readOnly
                className="w-full p-2 text-sm border rounded-lg"
              />

              <p className="text-sm font-bold text-[#7D8592]">Location</p>
              <div className="relative">
                <input
                  value="NYC, New York, USA"
                  readOnly
                  className="w-full p-2 text-sm border rounded-lg"
                />
                <MapPin className="absolute w-4 h-4 text-gray-400 right-3 top-3" />
              </div>

              <p className="text-sm font-bold text-[#7D8592]">Birth Date</p>
              <div className="relative">
                <input
                  value="May 19, 1996"
                  readOnly
                  className="w-full p-2 text-sm border rounded-lg"
                />
                <Calendar className="absolute w-4 h-4 text-gray-400 right-3 top-3" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <h3 className="mb-2 text-lg font-bold">Main info</h3>

          <div className="space-y-3">
            <p className="text-sm font-bold text-[#7D8592]">Email</p>

            <input
              value="evanyates@gmail.com"
              readOnly
              className="w-full p-2 text-sm border rounded-lg"
            />
            <p className="text-sm font-bold text-[#7D8592]">Mobile Number</p>

            <input
              value="+1 675 346 23-10"
              readOnly
              className="w-full p-2 text-sm border rounded-lg"
            />
          </div>
        </section>

        <div className="w-full h-full">
          <header className="flex items-center justify-around ">
            <img
              src={btn3Image}
              alt="image.svg"
              className="pointer-events-none select-none"
            />

            <div className="flex items-center gap-6">
              <div className="p-3 bg-white rounded-2xl">
                <LuFilter size={24} cursor={"pointer"} />
              </div>

              <select name="" id="" className="p-3.5 bg-white rounded-2xl">
                <option value="Current Projects">Current Projects</option>
              </select>
            </div>
          </header>

          <div className="flex flex-col gap-5 mt-5">
            <img
              src={projectImg}
              alt=""
              className="pointer-events-none select-none"
            />
            <img
              src={projectImg}
              alt=""
              className="pointer-events-none select-none"
            />
            <img
              src={projectImg}
              alt=""
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
