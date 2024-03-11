// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Projects from "./components/Projects.page.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/All-Projects-Page",
//         element: <Projects />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

///////////////////////////////////

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Projects from "./components/Projects.page.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/All-Projects-Page" element={<Projects />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

//////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
import Projects from "./components/Projects.page.jsx";
import Services from "./components/Services.component.jsx";
import { ProjectProvider } from "./Context/Projects.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/All-Projects-Page" element={<Projects />} />
        </Routes>
        <Footer />
      </ProjectProvider>
    </BrowserRouter>
  </React.StrictMode>
);
