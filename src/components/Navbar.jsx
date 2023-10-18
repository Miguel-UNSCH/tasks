import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.svg";

export function Navbar() {
  const { signin, logout, isAuthenticated } = useAuth();

  return (
    <>
      <nav className="bg-gray-900 w-full sticky top-0 left-0 border-b border-gray-500 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img
              src={logo}
              alt="hola"
              className="mr-3 h-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tasks Manager
            </span>
          </Link>
          <div className="flex md:order-2 gap-2">
            {!isAuthenticated && (
              <>
                <button
                  type="button"
                  className="text-white bg-[#5850EC] focus:ring-0 focus:outline-non font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="text-white bg-[#4D46CF] focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  "
                >
                  Register
                </button>
              </>
            )}
            {isAuthenticated && (
              <button
                type="button"
                onClick={logout}
                className="text-white bg-[#5850EC] focus:ring-0 focus:outline-non font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                Logout
              </button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only"></span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/tasks"}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  to={"/add-task"}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add task
                </Link>
              </li>
              <li>
                <Link
                  to={"/profile"}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
