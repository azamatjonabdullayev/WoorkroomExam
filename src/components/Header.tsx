import React, { type JSX } from "react";
import { IoSearch } from "react-icons/io5";
import { FiBell } from "react-icons/fi";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex items-center gap-1 px-5 py-3 bg-white w-103 rounded-2xl">
        <IoSearch className="size-6 text-[#0A1629]" />
        <input
          className="text-[#7D8592] text-base outline-none font-[Nunito] block w-full"
          type="text"
          name="searchPlace"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="p-3 bg-white rounded-2xl">
          <FiBell className="size-6 cursor-pointer text-[#0A1629] " />
        </button>

        <select
          className="bg-white rounded-2xl px-3.5 py-[9px] text-[#0A1629]"
          name="example"
        >
          <option
            className="flex items-center justify-center text-base font-extrabold"
            value="option1"
            defaultValue={"Evan Yetes"}
          >
            Evan Yetes
          </option>

          <option value="2">Select-ni tog'ri qila olmadim!</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
