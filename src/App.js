import "./App.css";
import InputTask from "./components/inputTask";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>MyTasks</h1>
        <InputTask />
        <List />
      </div>
    </div>
  );
}

export default App;
