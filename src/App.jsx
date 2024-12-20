// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./Components/Home";
// import Pastes from "./Components/Pastes";
// import ViewPaste from "./Components/ViewPaste";
// import Navbar from "./Components/Navbar";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: (
// //       <>
// //         <Navbar />
// //         <Home />,
// //       </>
// //     ),
// //   },
// //   {
// //     path: "/paste",
// //     element: (
// //       <>
// //         <Navbar />
// //         <Pastes />
// //       </>
// //     ),
// //   },
// //   {
// //     path: "/home/:id",
// //     element: (
// //       <>
// //         <Navbar />
// //         <ViewPaste />
// //       </>
// //     ),
// //   },
// // ]);

// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/pastes" element={<Pastes />} />
//           <Route path="/viewpaste" element={<ViewPaste />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Pastes from "./Components/Pastes";
import ViewPaste from "./Components/ViewPaste";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/paste",
    element: (
      <>
        <Navbar />
        <Pastes />
      </>
    ),
  },
  {
    path: "/home/:id",
    element: (
      <>
        <Navbar />
        <ViewPaste />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </>
  );
}

export default App;
