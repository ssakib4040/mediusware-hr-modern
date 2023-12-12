// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Header() {
  // const handleLogout = () => {
  //   console.log("logout");
  // };

  return (
    <>
      <div className="navbar mx-auto bg-base-100 sticky top-0 shadow z-[500] lg:z-[999]">
        <label
          htmlFor="my-drawer-2"
          className="btn bg-blue-700 drawer-button text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </label>

        <div className="navbar-start">
          {/* <div className="btn  normal-case text-xl"> */}

          <Link
            to="/"
            className="text-center text-2xl text-blue-700 font-bold pb-[5px] cursor-pointer"
          >
            <span className="text-[#00ab8e]">&lt;</span>
            {"mediusware"}
            <span className=" text-[#992892]">/</span>
            <span className="text-[#00ab8e]">&gt;</span>
          </Link>
          {/* </div> */}
        </div>

        {/* <div className="navbar-center">s</div> */}

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 md:flex hidden">
            <li>
              <Link to="/visit">Change Password</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            {/* <li>
              <a onClick={handleLogout}>Logout</a>
            </li> */}
          </ul>

          <div className="dropdown  dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden flex">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              
              */}

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Change Password</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
