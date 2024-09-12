import React from "react";

function ToDoItem(props) {
  return (
    <div
    // when ypu try to pass ID it calls the ID imediately
    // when ToDoITem is rendered
    // because in a set of parentheses and something inside it
    // your going to call the function rather passing
    // onClick = {props.onChecked(props.id)}

      onClick={() => {
        // with this new code
        // will only called whem onClick is triggered
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
