import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import Contact from "@/pages/Contact Us/Contact";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        index:true,
        element: <Home />,
        
      },
      {
        path: "contact_us",
        element: <Contact />,
        
      },
    ],
  },
]);
