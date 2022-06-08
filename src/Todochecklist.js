import React, { useState } from "react";
import { todosData } from "./tododata";
function Todochecklist() {
  const [todo, setTodo] = useState(todosData);

  const handleClick = (index) => {
    console.log("clicked", index);
    setTodo((prevState) => {
      const newtodo = prevState.map((ele, i) => {
        if (index === i) {
          return {
            completed: !ele.completed,
            text: ele.text,
          };
        }
        return ele;
      });
      return newtodo;
    });
  };
  return (
    <div>
      <ul>
        {todo.length ? (
          todo.map((ele, index) => (
            <div key={index}>
              <input
                onChange={() => handleClick(index)}
                type="checkbox"
                checked={ele.completed}
              />
              <li>{ele.text}</li>
            </div>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default Todochecklist;
