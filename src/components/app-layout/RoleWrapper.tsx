import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const RoleWrapper = ({ role }: any) => {
  const userRoles = ["ROLE_ADMIN", "ROLE_USER"];
  return (
    userRoles?.includes(role) && (
      <div className="flex min-h-screen justify-between overflow-clip bg-gray-100">
        <aside className="w-56 hidden lg:block ">
          <main className="fixed z-40  h-full">
            <Sidebar />
          </main>
        </aside>
        <main className="w-[100%] lg:w-[84%] z-10 ">
          <Outlet />
        </main>
      </div>
    )
  );
};

export default RoleWrapper;
