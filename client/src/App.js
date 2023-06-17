import React from 'react';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import RootLayout from './components/RootLayout/RootLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/auth", element: <Auth />}
    ],
  },
  
]);


const App = () => {

  return (
    <RouterProvider router={router}/>
  //  <div className={classes.header}>
  //     <NavBar />
  //     <Home />
  //  </div>
  );
}

export default App;
