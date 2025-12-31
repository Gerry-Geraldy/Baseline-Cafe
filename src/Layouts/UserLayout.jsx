import { Outlet } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Navbar from "../Sections/Layouts/User/Navbar";
import Footer from "../Sections/Layouts/User/Footer";

export default function UserLayout() {
  return (
    <div className="user-layout">
      {/* <nav>Navbar user</nav> */}
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
