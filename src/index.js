import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import CocktailPage from "./pages/CocktailPage";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/constructor",
        element: <></>,
      },
      {
        path: "/featured",
        element: <></>,
      },
      {
        path: "/about",
        element: <></>,
      },
      {
        path: "/cocktails/:id",
        element: <CocktailPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
