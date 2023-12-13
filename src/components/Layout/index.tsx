import { Link, Outlet } from "react-router-dom";

import Header from "../Header/Header";

interface sidebarContentInterface {
  name: string;
  path: string;
  content: contentInterface[];
}

interface contentInterface {
  name: string;
  path: string;
  secondaryPath?: string;
  changePath?: string;
}

export default function Layout() {
  const sidebarContent: sidebarContentInterface[] = [
    {
      name: "ASSET_MANAGEMENT",
      path: "/asset-management",
      content: [
        {
          name: "Credentials",
          path: "/credentials",
          secondaryPath: "/manage-credentials",
          changePath: "/change-credentials",
        },
      ],
    },

    {
      name: "Employee",
      path: "/employee",
      content: [
        {
          name: "Bank Account",
          path: "/bank-account",
          secondaryPath: "/add-bank-account",
        },
        {
          name: "Employee List",
          path: "/employee-list",
          changePath: "/change-employee-list",
        },
        {
          name: "Employee Activities",
          path: "/employee-activities",
        },
        {
          name: "Employee Attendance",
          path: "/employee-attendance",
        },
        {
          name: "Employees",
          path: "/employees",
          changePath: "/change-employees",
        },
        {
          name: "FAQ List",
          path: "/faq-list",
        },
        {
          name: "Favourite Menu",
          path: "/favourite-menu",
          secondaryPath: "/add-favourite-menu",
        },
        {
          name: "Home Offices",
          path: "/home-offices",
          secondaryPath: "/add-home-offices",
        },
        {
          name: "Learnings",
          path: "/learnings",
        },
        {
          name: "Leaves",
          path: "/leaves",
          secondaryPath: "/add-leaves",
        },
      ],
    },

    {
      name: "PROJECT_MANAGEMENT",
      path: "/project-management",
      content: [
        {
          name: "Daily project updates",
          path: "/daily-project-updates",
          secondaryPath: "/add-daily-project-updates",
        },
        {
          name: "Employee project hours",
          path: "/employee-project-hours",
        },
        {
          name: "Group By Employee",
          path: "/group-by-employee",
        },
        {
          name: "Group By Manager",
          path: "/group-by-manager",
        },
        {
          name: "Group By Project",
          path: "/group-by-project",
        },
        {
          name: "Projects",
          path: "/projects",
        },
        {
          name: "Weekly Employee Hours",
          path: "/weekly-employee-hours",
        },
      ],
    },
    {
      name: "PROVIDENT_FUND",
      path: "/provident-fund",
      content: [
        {
          name: "Provident entrys",
          path: "/provident-entrys",
        },
      ],
    },
  ];

  return (
    <>
      <Header />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:ml-[320px] px-3">
          {/* <!-- Page content here --> */}
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button"
          >
            Open drawer
          </label> */}
          <Outlet />
        </div>

        <div className="drawer-side !fixed mt-[67px] bottom-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu !block overflow-y-auto h-[calc(100vh-67px)] px-2 py-4 w-[320px] bg-base-200 text-base-content">
            {/* title for ul  */}
            {sidebarContent.map((item, index) => {
              return (
                <div className="mb-5" key={index}>
                  <Link className="text-xl font-bold my-2 " to={item.path}>
                    {item.name}
                  </Link>

                  {item.content.map((subItem, index) => {
                    return (
                      <li className="flex flex-row justify-between" key={index}>
                        <Link to={subItem.path} className="hover:!bg-gray-300 disable-active-focus">{subItem.name}</Link>

                        <div className="hover:!bg-transparent disable-active-focus px-0 py-0 gap-0">
                          {subItem.secondaryPath && (
                            <Link
                              to={subItem.secondaryPath}
                              className="flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-gray-300 transition"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                />
                              </svg>{" "}
                              Add
                            </Link>
                          )}

                          {subItem.changePath && (
                            <Link
                              to={subItem.changePath}
                              className="flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-gray-300 transition"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-gear-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                              </svg>{" "}
                              Change
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
