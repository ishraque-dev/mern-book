import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiFillHome, AiTwotoneAppstore } from 'react-icons/ai';
import { BsCollectionPlay, BsMessenger } from 'react-icons/bs ';
import { HiUserGroup } from 'react-icons/hi';
import { MdNotifications } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
function Header() {
  const navigationBox = [
    {
      icon: AiFillHome,
      to: '/',
    },
    {
      icon: BsCollectionPlay,
      to: '/video',
    },
    {
      icon: HiUserGroup,
      to: '/groups',
    },
    {
      icon: AiTwotoneAppstore,
      to: '/#',
    },
  ];
  return (
    <div className="shadow-md ">
      <div className="container mx-auto flex justify-between p-3 ">
        <div className="flex w-[60%] items-center gap-x-2 md:w-[30%]">
          {/* left */}
          <img
            src="/imgs/logo.png"
            alt="logo"
            className="mr-3 w-[30px] md:w-[40px]"
          />

          <div className="relative flex w-full items-center md:w-[70%] ">
            <input
              type="text"
              placeholder="Search  "
              className="w-full rounded-full bg-[#F1F2F7] px-3 py-1  outline-none md:p-2"
            />
            <FiSearch className="absolute right-3 text-base text-[#3C4048] md:text-xl" />
          </div>
        </div>
        <div className="top absolute bottom-0 left-0 right-0 m-auto flex w-full  items-center  justify-around md:relative md:flex md:w-[40%] md:shadow-none">
          {/* Middle */}
          {navigationBox.map((item) => (
            <div className="cursor-pointer rounded-lg p-3 transition duration-150 hover:bg-[#DDDDDD]">
              <item.icon
                key={item.name}
                className="text-2xl  text-[#3C4048] "
              />
            </div>
          ))}
        </div>
        <div className="flex w-[30%] items-center justify-end gap-2 md:gap-5">
          {/* right */}
          <div className=" rounded-full bg-[#DDDDDD] p-1 md:p-2">
            <BsMessenger className="cursor-pointer  text-xl text-[#3C4048] md:text-2xl" />
          </div>
          <div className="relative rounded-full bg-[#DDDDDD] p-1 md:p-2">
            {/* Notification */}
            <div className="absolute -top-1 -left-1 h-4 w-4 rounded-full border border-black bg-red-500 text-center md:h-5 md:w-5">
              <p className="text-xs font-bold leading-4 text-white">2</p>
            </div>
            <MdNotifications className="cursor-pointer  text-xl text-[#3C4048] md:text-2xl " />
          </div>
          <div className="max-w-[30px] overflow-hidden rounded-full bg-[#DDDDDD] md:max-w-[40px] ">
            {/* <FaUserCircle className="cursor-pointer  text-xl text-[#3C4048]  md:text-2xl" /> */}
            {/* user image */}
            <img
              src="/imgs/me.jpg"
              alt="user"
              className="w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
