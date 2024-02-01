import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import fetchDataAPI from "./components/fetchDataAPI";

const postData = JSON.stringify({
  userId: 1,
  sthElse: 'dsakmndasokdmasokdmqdokqwmdokwq',
  qwedfmokURL: 'https://dsakmldsadmasod.daslkmpd',
})

console.log(fetchDataAPI('https://httpbin.org/post','POST',{},postData));

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
