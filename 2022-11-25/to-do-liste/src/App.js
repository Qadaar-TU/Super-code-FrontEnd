import "./App.css";
import ListItem from "./components/ListItem";
let data = [
  {
    toDo: "Einkaufen",
  },
  {
    toDo: "Kochen",
  },
  {
    toDo: "Einkaufen",
  },
  {
    toDo: "Kochen",
  },
  {
    toDo: "sdsdfsdf",
  },
];

function App() {
  return (
    <div className="App">
      <h1>To Do Liste</h1>
      <ul>
        {data.map((toDoItem) => (
          <ListItem toDo={toDoItem.toDo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
