import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-[50vh] p-4 overflow-auto items-center justify-center">
      <Outlet />
    </main>
  );
};

export default Layout;
