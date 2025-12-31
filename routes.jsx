import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./src/Layouts/AuthLayout";
import UserLayout from "./src/Layouts/UserLayout";
import Homepage from "./src/Pages/Homepage";
import AboutPage from "./src/Pages/AboutPage";
// import MenuPage from "./src/Pages/MenuPage";
import BlogPage from "./src/Pages/BlogPage";
import GalleryPage from "./src/Pages/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "about", element: <AboutPage /> },
      // { path: "menu", element: <MenuPage /> },
      // { path: "blog", element: <BlogPage /> },
      { path: "gallery", element: <GalleryPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
