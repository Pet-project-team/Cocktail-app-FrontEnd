import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import fetchDataAPI from "./components/fetchDataAPI";
import "./App.css";

const postData = JSON.stringify({
  userId: 1,
  sthElse: "dsakmndasokdmasokdmqdokqwmdokwq",
  qwedfmokURL: "https://dsakmldsadmasod.daslkmpd",
});

console.log(fetchDataAPI("https://httpbin.org/post", "POST", {}, postData));

export default function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
