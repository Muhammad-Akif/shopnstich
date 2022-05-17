import { useState } from "react";
import Image from 'next/image'
import control from '../images/customer/control.png'
import Chart_fill from '../images/customer/Chart_fill.png'
import Chat from '../images/customer/Chat.png'
import User from '../images/customer/User.png'
import Calendar from '../images/customer/Calendar.png'
import Folder from '../images/customer/Folder.png'
import logo from '../images/customer/logo.png'
import { Dashboard } from '../components'

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill, gap: true },
    { title: "Accounts", src: User },
    { title: "Inbox", src: Chat },
    { title: "Orders ", src: Folder, gap: true },
    { title: "Offer & Deals ", src: Calendar },
  ];
  
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src={control}
          className={`absolute cursor-pointer -right-3  top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="pb-8" />
        <div className="flex gap-x-4 items-center">
          <Image
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Customer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >

              <Image src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen overflow-y-scroll flex-1 p-7">
        <Dashboard/>
      </div>
    </div>
  );
};
export default App;