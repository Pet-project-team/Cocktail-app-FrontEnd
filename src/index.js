import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Header from "./components/Header";
import CocktailPage from "./components/CocktailPage";
import reportWebVitals from "./reportWebVitals";
import fetchDataAPI from "./components/fetchDataAPI";
import "./App.css";

const postData = JSON.stringify({
  userId: 1,
  sthElse: "dsakmndasokdmasokdmqdokqwmdokwq",
  qwedfmokURL: "https://dsakmldsadmasod.daslkmpd",
});

console.log(fetchDataAPI("https://httpbin.org/post", "POST", {}, postData));

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

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
