import React from "react";
import  ReactDOM from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './Components/NotFound.jsx';
import Home from './Pages/Home/Home.jsx';
import Games from './Pages/Games/Games.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import GameDetail from './Pages/GameDetail/GameDetail.jsx';
import About from './Pages/About/About.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Root from "./Root";
import CloudGaming from "./Pages/CloudGaming/CloudGaming";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: '/games/',
        element: <Games></Games>,
      },
      {
        path: 'games/:id',
        element: (
          <PrivateRoute>
            <GameDetail></GameDetail>
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path:'/cloudgaming',
        element:<CloudGaming></CloudGaming>
      },
      {
        path: 'product/:id',
        element: <PrivateRoute>
          <GameDetail />
        </PrivateRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);