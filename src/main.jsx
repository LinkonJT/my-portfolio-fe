import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider} from "flowbite-react";
import { customTheme } from "./Theme/theme.js";
  import { ToastContainer} from 'react-toastify'
import { ThemeBoot } from "./components/ThemeBoot.jsx";
// import "flowbite/dist/flowbite.css";

 

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <ThemeProvider>
     {/* <ThemeBoot />  */}
      <App></App>
   <ToastContainer />
   </ThemeProvider>
  </StrictMode>
);
