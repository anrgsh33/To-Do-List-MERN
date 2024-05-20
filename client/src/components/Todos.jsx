import { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/gettodos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error while fetching the data!", error);
      });
  }, [todos]);
  return (
    <div>
      <ul id="ul">
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
