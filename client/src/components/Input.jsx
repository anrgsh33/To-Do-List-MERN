import { useState } from "react";
import axios from "axios";

const Input = () => {
  const [text, setText] = useState("");

  const onFormSubmit = (e) => {
    setText("");
    e.preventDefault(); // Prevent the form from submitting the default way
    axios
      .post("http://localhost:5000/add", { task: text })
      .then((response) => {
        console.log("Data saved successfully", response);
      })
      .catch((error) => {
        console.error("There was an error saving the data!", error);
      });
  };
  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form id="form" onSubmit={onFormSubmit}>
        <input
          className="input"
          id="input"
          type="text"
          placeholder="Add a Task"
          value={text}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};
export default Input;
