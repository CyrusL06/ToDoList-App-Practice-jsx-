

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  // Create useState that stores value in the component
  const [inputText, setInputText] = useState("");
  // Creates the array that stores objects
  const [items, setItems] = useState([]);

  // Keep holds the event
  function handleChange(event) {
    // Scans the inputText and puts it into constant
    const newValue = event.target.value;
    // Then newValue is inserted in setInputText state
    setInputText(newValue);
  }

  function addItem() {
    // function is made within setItems
    // But why new Function???
    // because we want to add the text that is inside 
    //our inputs to our item for the array
    // So we need to call on setItems
    setItems(prevItems => {
      // takes the {newValue} inserted above
      // then return a new array
      // USING SPREAD OPERATOR
      //      👇🏼adds the item using spread op
                          //👇🏼add new item inside our inputText
      return [...prevItems, inputText];
    });
    // Refresh the inputText
    setInputText("");
  }

  // Receive the Id thats been tapped
  function deleteItem(id) {
    // to update items
    setItems(prevItems => {
      // To change items array 
      // we filter the item we want 
                              //taps into item
                                    // and taps into index item 
      // Interpretation
      // Were gonna look into the {prevItems} and look through
      // the item, and index
      return prevItems.filter((item, index) => {
        // and return an output a final array 
        // filter it so that other arrays that match stays in the array
        return index !== id;
        console.log(item);
        
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {1. /* When they inputted activate {handleChange}*/}
                                          {/*Align value property in this way*/}
        <input onChange={handleChange} type="text" value={inputText} />
        {2. /* When Click activate addItem algo*/}
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {/* 👇🏼Maps within the items array   */}
        {/* then passes each item as {todoItem} */}
        {/* {items.map((VALUE, NUMBER) => (  ))} */}
        {/* Adding comma taps into the index value */}
          {items.map((todoItem, index) => (
            
            <ToDoItem
            // transfers into the other component 
            // In ideal doNOT USE {INDEX} AS KEY
              key={index}
              // which then can acces whichh ID you pressed
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
