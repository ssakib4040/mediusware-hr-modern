const employees = [
  {
    active: true,
    name: "Md Shahinur Rahman",
    position: "Managing Director",
    projects: ["Bulk.ly", "Bulk.sms", "Bulk.email"],
  },

  {
    active: true,
    name: "Employee 1",
    position: "Chief Financial Officer",
    projects: ["UX-Internal"],
  },

  {
    active: false,
    name: "Employee 2",
    position: "Chief Technology Officer",
    projects: ["Mediusware.us"],
  },

  {
    active: true,
    name: "Employee 3",
    position: "Chief Operating Officer",
    projects: ["script-bot"],
  },

  {
    active: false,
    name: "Employee 4",
    position: "Operations Coordinator",
    projects: ["data-hub"],
  },

  {
    active: false,
    name: "Employee 5",
    position: "Software Engineer",
    projects: ["data-hub", "web-core"],
  },

  {
    active: true,
    name: "Employee 6",
    position: "Project Manager",
    projects: ["niservices - uptimeiq"],
  },

  {
    active: true,
    name: "Employee 7",
    position: "UI/UX Designer",
    projects: ["HR", "AI Doc Builder"],

  },

  {
    active: true,
    name: "Employee 8",
    position: "Frontend Developer (NextJS)",
    projects: ["BASIS-Members", "HR"],

  },

  {
    active: false,
    name: "Employee 9",
    position: "Frontend Developer (ReactJS)",
    projects: ["ERP"],

  },
];

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-3 py-3">
      <div className="border">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {employees.map((employee, index) => (
                <tr key={index}>
                  <th>
                    <div
                      className={`h-2 w-2 ${
                        employee.active ? "bg-green-400" : "bg-red-400"
                      } rounded-full`}
                    ></div>
                  </th>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Projects</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {employees.map((employee, index) => (
                <tr key={index}>
                  <th>
                    <div
                      className={`h-2 w-2 ${
                        employee.active ? "bg-green-400" : "bg-red-400"
                      } rounded-full`}
                    ></div>
                  </th>
                  <td>{employee.name}</td>
                  <td>
                    {employee.projects?.map((project, index) => (
                      <div key={index}>{project}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
