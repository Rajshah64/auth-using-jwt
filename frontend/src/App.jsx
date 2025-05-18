// import LandingPage from "./LandingPage";
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoutes from "./ProtectedRoutes";
// import SD from "./Student-Dashboard";
// import TD from "./Teacher-Dashboard";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <ProtectedRoutes path="/student-dashboard" element={<SD />} />
//       <ProtectedRoutes path="/teacher-dashboard" element={<TD />} />
//     </Routes>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import LandingPage from "./LandingPage";
import SD from "./Student-Dashboard";
import TD from "./Teacher-Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/student-dashboard"
        element={<ProtectedRoutes component={SD} />}
      />
      <Route
        path="/teacher-dashboard"
        element={<ProtectedRoutes component={TD} />}
      />
    </Routes>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoutes from "./ProtectedRoutes";
// import LandingPage from "./LandingPage";
// import SD from "./Student-Dashboard";
// import TD from "./Teacher-Dashboard";

// function App() {
//   return (
//     <Routes>
//       {/* Public Route */}
//       <Route path="/" element={<LandingPage />} />

//       {/* Protected Routes */}
//       <Route element={<ProtectedRoutes />}>
//         <Route path="/student-dashboard" element={<SD />} />
//         <Route path="/teacher-dashboard" element={<TD />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
