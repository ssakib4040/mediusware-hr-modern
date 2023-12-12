import { Link, Outlet } from "react-router-dom";

import Header from "../Header/Header";

interface sidebarContentInterface{
  name: string,
  path: string,
  content: contentInterface[]
}

interface contentInterface{
  name: string,
  path: string,
  secondaryPath?: string
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
        },
        {
          name: "Employee activities",
          path: "/employee-activities",
        },
        {
          name: "Employee Attendance",
          path: "/employee-attendance",
        },
        {
          name: "Employees",
          path: "/employees",
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
        <div className="drawer-content lg:ml-[320px] px-3 dev">
          {/* <!-- Page content here --> */}
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button"
          >
            Open drawer
          </label> */}
          <Outlet />
        </div>
        <div className="drawer-side !fixed mt-[67px]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu !block overflow-y-auto h-screen p-4 w-80 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {/* title for ul  */}
            {sidebarContent.map((item, index) => {
              return (
                <div className="mb-5" key={index}>
                  <Link className="text-xl font-bold my-2 " to={item.path}>
                    {item.name}
                  </Link>

                  {item.content.map((subItem, index) => {
                      return (
                        // <li className="bg-[#676BE0] rounded-md">
                        //   <a className="!text-white">{subItem.name}</a>
                        // </li>

                        <li
                          className="flex flex-row justify-between"
                          key={index}
                        >
                          <Link to={subItem.path}>{subItem.name}</Link>

                          {subItem.secondaryPath && (
                            <Link to={subItem.secondaryPath}>+ Add</Link>
                          )}
                        </li>
                      );
                    }
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
