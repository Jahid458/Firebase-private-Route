import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Root from "./components/Root.jsx";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Orders from "./components/Orders.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path:"orders",
        element:<PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path:'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
         <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
