import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public pages
import Home from "../Pages/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";


// Admin Dashboard pages
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";


// Shared
import Profile from "../Pages/Dashboard/Shared/Profile";

// Route protection
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageBlogs from "../Pages/Dashboard/Admin/ManageBlogs";
import AddBlog from "../Pages/Dashboard/Admin/AddBlog";
import NotFound404 from "../Pages/NotFound404";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        
        { path: "/", element: <Home /> },
      //         {
      //   path: "/signin",
      //   element: <SignIn></SignIn>
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp></SignUp>
      // },




    ],
  },
//   {
//     path: "/dashboard",
//     element: 
//     //  <PrivateRoute>
//     //     <DashboardLayout />
//     //   </PrivateRoute>
// <DashboardLayout></DashboardLayout>
//     ,
//     children: [
//       // Shared
//       { path: "profile", element: <Profile /> },
      

//       // Admin
//       {
//         path: "manage-users",
//         element: (
//           <AdminRoute>
//             <ManageUsers />
//           </AdminRoute>
//         ),
//       },
//       {
//         path: "add-blog",
//         element: (
//         //   <AdminRoute>
//         //  <AddBlog></AddBlog>
//         // </AdminRoute>
//  <AddBlog></AddBlog>

//         ),
//       },

//       {
//         path: "manage-blogs",
//         element: (
//         //   <AdminRoute>
//         //     <ManageBlogs></ManageBlogs>
//         //   </AdminRoute>

//             <ManageBlogs></ManageBlogs>
//         ),
//       },
      
//     ],
//   },

   {
    path: '*',
    element: <NotFound404></NotFound404>
  },
]);
