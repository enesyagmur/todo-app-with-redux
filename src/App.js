import "./App.css";
import InputTask from "./components/inputTask";
import List from "./components/list";
import Clear from "./components/clear";
import Count from "./components/count";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>MyTasks</h1>
        <InputTask />
        <List />
        <footer>
          <Count />
          <Clear />
        </footer>
      </div>
    </div>
  );
}

export default App;
