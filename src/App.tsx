import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./stores/store";
import { addTodo, deleteTodo } from "./slices/todoSlice";
function App() {
  const [valueInput, setValueInput] = useState("");
  // lấy state từ stote
  const todo = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  const handeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueInput(value);
  };
  const submitFrom = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ job: valueInput }));
    setValueInput("");
  };
  return (
    <div className="container">
      <form id="myForm" onSubmit={submitFrom} className="form">
        <input value={valueInput} onChange={handeChange} type="text" />
        <button>Add item</button>
      </form>
      <div className="box-item">
        {todo.map((item, index) => (
          <div key={index} className="item">
            <p className="title">{item.job}</p>
            <p
              className="remove-item"
              onClick={() => dispatch(deleteTodo(item.job))}
            >
              Remove
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
