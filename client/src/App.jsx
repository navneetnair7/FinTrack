import "./App.css";
import Add from "./components/Add";
import History from "./components/History";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col width-full">
      <Header />
      <div className="flex flex-row justify-around">
        <div className="w-1/2">
          <Add />
        </div>
        <div className="w-1/2">
        <History />
        </div>
      </div>
    </div>
  );
}

export default App;
