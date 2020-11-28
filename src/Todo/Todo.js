import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { fb } from "../firebase";

export default function Todo({ todo, inprogress, id }) {
  const toggleInProgress = () => {
    fb.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };
  const deleteTodo = () => {
    fb.collection("todos").doc(id).delete();
  };
  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress..." : "Completed"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
