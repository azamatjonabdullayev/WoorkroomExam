import React, { type JSX } from "react";
import { IoSearch } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Select } from "antd";

const Header: React.FC = (): JSX.Element => {
  const { Option } = Select;

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

        <Select
          defaultValue="Evan Yates"
          style={{ width: 200 }}
          onChange={(value) => {
            if (value === "profile") {
              window.location.href = "/profile"; // Переход на страницу профиля
            }
          }}
        >
          <Option value="evan">Evan Yates</Option>
          <Option value="profile">
            <Link to="/profile">My Profile</Link>
          </Option>
        </Select>
      </div>
    </header>
  );
};

export default Header;
