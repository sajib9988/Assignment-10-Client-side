import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error.jsx';
import Root from './Layout/Root.jsx';
import Home from './Home/Home.jsx';
import Login from './Login and Register/Login.jsx';
import Register from './Login and Register/Register.jsx';
import MyCraft from './Components/Pages/MyCraft.jsx';
import PrivateRouter from './Shared/PrivateRouter.jsx';
import AllArtcraft from './Components/Pages/AllArtcraft.jsx';
import AddCraftItem from './Components/Pages/AddCraftItem.jsx';
import Update from './Components/Pages/Update.jsx';
import ViewDetails from './Components/Pages/ViewDetails.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('http://localhost:5000/crafts')
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      }, 
      {
        path: '/mycrafts',
        element: <PrivateRouter><MyCraft /></PrivateRouter>,
        // loader: ()=> fetch('http://localhost:5000/mycrafts')
      },
      {
        path: '/allartcraft',
        element: <PrivateRouter><AllArtcraft /></PrivateRouter>,
        loader: ()=> fetch('http://localhost:5000/crafts')
      },
      {
        path: '/addcraftitem',
        element: <PrivateRouter><AddCraftItem /></PrivateRouter>,
      },
      {
        path: '/update/:id',
        element: <PrivateRouter><Update /></PrivateRouter>,
        loader: ({params})=> fetch(`http://localhost:5000/crafts/${params.id}`)
      },
      {
        path: '/viewdetails/:id',
        element: <PrivateRouter><ViewDetails /></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
      }, 
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
