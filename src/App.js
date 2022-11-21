import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";
const App = () => {
  let [name, setname] = useState("Trung Anh");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching youtobe", type: "demo" },
    { id: "todo2", title: "fix bugs", type: "demo" },
    { id: "todo3", title: "fix bugs 1", type: "ta 1" },
    { id: "todo4", title: "fix bugs 2", type: "ta 2" },
  ]);

  const handleEventclick = (event) => {
    // setname(address);
    // console.log("Click me", name);
    if (!address) {
      alert("emtry");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 10001),
      title: address,
      type: "testTa",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChaneInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currenttodos = todos;
    currenttodos = currenttodos.filter((item) => item.id !== id);
    setTodos(currenttodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React with {name} !</h2>
        <Todo
          todos={todos}
          title={"All Todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter((item) => item.type === "demo")}
          title={"demo"}
          deleteDataTodo={deleteDataTodo}
        />

        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChaneInput(event)}
        />
        <button type="button" onClick={(event) => handleEventclick(event)}>
          Click Me!
        </button>
      </header>
    </div>
  );
};

export default App;
