import React from 'react';
import Home from './components/home/Home';
import Login from './components/log/Login';
import Singin from './components/log/Singin';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/singin", element: <Singin /> },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
