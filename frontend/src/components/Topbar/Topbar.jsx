import { BiSolidUser } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Topbar = () => {
  return (
    <nav className="h-[80px] w-full bg-[#D9D9D9] flex justify-between items-end pr-[80px] pl-[42px]">
      <Link to="/">
        <div className="w-[143px] h-10 bg-[#E6E6E6] mb-[22px]"></div>
      </Link>
      <ul className="flex-1 h-full flex justify-end items-end gap-9 pr-[57px] pb-[13px]">
        <Link to="/home">
          <li className="font-medium text-xl left-6 cursor-pointer">Inicio</li>
        </Link>
        <li className="font-medium text-xl left-6 cursor-pointer">Plantillas</li>
        <li className="font-medium text-xl left-6 cursor-pointer">Historial</li>
      </ul>
      <div className="flex pb-2 items-center gap-5">
        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
          <FiBell className="w-[30px] h-[34px]" />
        </div>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="">
              <BiSolidUser className="w-[30px] h-[34px]" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <Link
                    to="/account"
                    className="text-gray-700 block px-4 py-2 hover:bg-gray-100 font-medium text-xl leading-6"
                  >
                    Ir a mi cuenta
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="#"
                    className="text-gray-700 block px-4 py-2 hover:bg-gray-100 font-medium text-xl leading-6"
                  >
                    Soporte
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="#"
                    className="text-gray-700 block px-4 py-2 hover:bg-gray-100 font-medium text-xl leading-6"
                  >
                    Plan actual
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                    type="button"
                    className="text-gray-700 block w-full px-4 pb-2 pt-4 text-left hover:bg-gray-100 font-normal text-xs leading-4"
                  >
                    Cerrar sesión
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Topbar;
