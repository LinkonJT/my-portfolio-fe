import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "flowbite-react";
import { customTheme } from "./Theme/theme.js";
  import { ToastContainer} from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <App></App>
   <ToastContainer />
  </StrictMode>
);
