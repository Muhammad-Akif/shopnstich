import { useState,useEffect } from "react";
import Image from 'next/image'
import control from '../images/customer/control.png'
import Chart_fill from '../images/customer/Chart_fill.png'
import Chat from '../images/customer/Chat.png'
import User from '../images/customer/User.png'
import Folder from '../images/customer/Folder.png'
import logo from '../images/customer/logo.png'
import { GoSignOut } from "react-icons/go";
import { Dashboard, Profile, Orders, Inbox, Deals } from '../components'
import { useRouter } from 'next/router'

const App = () => {
  const router = useRouter()
  const [open, setOpen] = useState(true);
  
  const Menus = [
    { id: 0, title: "Dashboard", tab: Dashboard, src: Chart_fill, gap: true },
    { id: 1, title: "Accounts", tab: Profile, src: User },
    { id: 2, title: "Inbox", tab: Inbox, src: Chat, gap: true },
    { id: 3, title: "Orders ", tab: Orders, src: Folder },
    // { id: 4, title: "Offer & Deals ", tab:Deals, src: Calendar },
    { id: 4, title: "Logout", tab: Deals, src: GoSignOut, gap: true },
  ];
  const [Tab, setTab] = useState(Menus[0])

  const changeToggle = (Menu) => {
    console.log(" Menu ---> ", Menu);
    if (Menu.title == "Logout") {
      localStorage.removeItem('user')
      router.push("/")
    }
    else {
      setTab(Menu);
    }
  }

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
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
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Customer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              onClick={changeToggle.bind(null, Menu)}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === Tab.id && "bg-light-white"
                } `}
            >
              {Menu.id == 4 ?
                <Menu.src class="text-white text-xl ml-1" /> :
                <Image src={Menu.src} />
              }
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen overflow-y-scroll flex-1 p-7">
        {console.log('tabs --> ', Tab)}
        <Tab.tab />
      </div>
    </div>
  );
};
export default App;