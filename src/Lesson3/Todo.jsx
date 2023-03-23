import { useState } from "react";
import './Tod.scss'
const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const storeg = localStorage.getItem("erray");
    return storeg ? JSON.parse(storeg) : [];
  });
  const [nTodo, setNtodo] = useState("");
  const [nTodo1, setNtodo1] = useState("");
  const [nTodo2, setNtodo2] = useState("");
  const [nTodo3, setNtodo3] = useState("");

  const eventCHange = (e) => {
    setNtodo(e.target.value);
  };
  const eventCHange1 = (e) => {
    setNtodo1(e.target.value);
  };
  const eventCHange2 = (e) => {
    setNtodo2(e.target.value);
  };
  const eventCHange3 = (e) => {
    setNtodo3(e.target.value);
  };
  const submitFun = (e) => {
    e.preventDefault();
    if (
      !nTodo.trim() &&
      nTodo1.trim() &&
      nTodo3.trim() !== nTodo2.trim()
    )
      return;
    setTodo([
      ...todo,
      {
        id: Date.now(),
        text: nTodo,
        email: nTodo1,
        password: nTodo2,
        conPassword: nTodo3,
      },
    ]);
    setNtodo("");
    setNtodo1("");
    setNtodo2("");
    setNtodo3("");
  };
  localStorage.setItem("erray", JSON.stringify(todo));
  return (
    <div className="container pt-5">
      <form onSubmit={submitFun} className="form">
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={nTodo}
          onChange={eventCHange}
        />
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          name="email"
          onChange={eventCHange1}
          value={nTodo1}
          placeholder="Email"
          type="email"
        />
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          onChange={eventCHange2}
          value={nTodo2}
          name="password"
          placeholder="Password"
          type="password"
        />
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          onChange={eventCHange3}
          value={nTodo3}
          name="conpassword"
          placeholder="Conform Password"
          type="password"
        />
        <button className="form__btn">Add</button>
      </form>
    <div className="row">
     { todo.map((element)=>(

     <div className="col" key={element.id}>
      <h1 >{element.text}</h1>
      <a href="#">{element.email}</a>
      <h3 >{element.conPassword}</h3>
      <h2 >{element.password}</h2>

     </div>
     ))}
    </div>
    </div>
  );
};

export default Todo;
