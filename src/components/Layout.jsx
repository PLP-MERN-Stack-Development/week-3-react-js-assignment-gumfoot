import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 p-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
