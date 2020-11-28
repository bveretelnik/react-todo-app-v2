import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { fb } from "./firebase";
import firebase from "firebase/app";
import Todo from "./Todo/Todo";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  const getTodos = () => {
    fb.collection("todos").onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  const addTodo = (e) => {
    e.preventDefault();

    fb.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>B_Veretelnik TODO APP 🔥</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
        <div className="container2">
          {todos.map((todo) => (
            <Todo todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
