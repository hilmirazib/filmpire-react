import React from "react";
import { CssBaseline } from "@mui/material";
import { NavBar, Profile, MovieInformation, Movies, Actors } from ".";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/movie/:id",
    element: <MovieInformation />,
  },
  {
    path: "/actors/:id",
    element: <Actors />,
  },
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
]);
const App: React.FC = () => {
  return (
    <div >
      <CssBaseline />
      <NavBar />
      <main>
        <div></div>
        <RouterProvider router={router} />
      </main>
    </div>
  );
};

export default App;
