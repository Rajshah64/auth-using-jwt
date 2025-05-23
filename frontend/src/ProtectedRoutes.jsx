// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();

// // receives component and any other props represented by ...rest
// export default function ProtectedRoutes({ component: Component, ...rest }) {
//   return (
//     // this route takes other routes assigned to it from the App.js and return the same route if condition is met
//     <Route
//       {...rest}
//       render={(props) => {
//         // get cookie from browser if logged in
//         const token = cookies.get("TOKEN");

//         // returns route if there is a valid token set in the cookie
//         if (token) {
//           return <Component {...props} />;
//         } else {
//           // returns the user to the landing page if there is no valid token set
//           return (
//             <Navigate
//               to={{
//                 pathname: "/",
//                 state: {
//                   // sets the location a user was about to access before being redirected to login
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// }

import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ProtectedRoutes({ component: Component, ...rest }) {
  // Get token from cookies
  const token = cookies.get("TOKEN");

  // If token exists, render the component; otherwise, redirect to landing page
  return token ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace state={{ from: rest.location }} />
  );
}

// import React from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

// export default function ProtectedRoutes() {
//   const token = cookies.get("TOKEN");
//   const location = useLocation();

//   return token ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
// }
