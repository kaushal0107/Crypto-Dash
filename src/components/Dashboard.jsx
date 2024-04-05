import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  BuildingOffice2Icon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { MdWebAsset } from "react-icons/md";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Asset from "./Assets";
import Home from "./Home";
import Organization from "./Organization";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Organization", href: "/organization", icon: BuildingOffice2Icon },
  { name: "Asset", href: "/asset", icon: MdWebAsset },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isCurrentPage = (path) => location.pathname === path;
  const renderSidebar = () => {
    const filteredNavigation = navigation.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-800 px-6 ring-1 ring-white/5">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://carboncell.io/assets/img/logo2.png"
            alt="Carbon Cell"
          />
        </div>
        <div className="flex gap-x-4 self-stretch lg:gap-x-6 bg-neutral-700 py-2 px-1 rounded-md ">
          <form className="flex" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-0 w-5 text-white"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block w-full border-0 bg-transparent placeholder:text-white py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm font-semibold leading-6"
                placeholder="Search"
                type="search"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {filteredNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        isCurrentPage(item.href)
                          ? " text-green-600"
                          : "text-white hover:text-green-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.href);
                      }}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-neutral-700">
                <img
                  className="h-8 w-8 rounded-full neutral-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Kaushal Mishra</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 xl:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-neutral-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {renderSidebar()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {renderSidebar()}
        </div>

        <div className="xl:pl-72 h-screen">
          <div className="xl:hidden sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-neutral-900 px-4 shadow-sm sm:px-6 lg:px-8">
            <div class="flex justify-between xl:hidden w-full">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://carboncell.io/assets/img/logo2.png"
                  alt="Carbon Cell"
                />
              </div>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-white xl:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <main className="bg-neutral-900">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/asset" element={<Asset />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
