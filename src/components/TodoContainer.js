import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import ModalRandomBySelected from './ModalRandomBySelected';
import ModalRandomBySystem from './ModalRandomBySystem';
const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());
  const [checked, setChecked] = useState([]);
  const [count, setCount] = useState(getInitialCounter);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
    //storing counter selected items
    const _count = JSON.stringify(count);
    localStorage.setItem("counter", _count);
  }, [todos,count]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  function getInitialCounter() {
    // getting stored selected items
    const _countertemp = localStorage.getItem("counter");
    const savedSelectedItems = JSON.parse(_countertemp);
    return savedSelectedItems || 0;
  }
  const handleChange = (event, id) => {
    var updatedList = [...checked];
  if (event.target.checked) {
    if(count >= 10) {
      alert("you have been selected 10 exam already!")
    }else{
      setCount(count+1);
      updatedList = [...checked, event.target.value];
      setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            published: !todo.published,
          };
        }
        return todo;
      })
      );
    }
  } else {
    setCount(count-1);
    updatedList.splice(checked.indexOf(event.target.value), 1);
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            published: !todo.published,
          };
        }
        return todo;
      })
      );
  }
  setChecked(updatedList);
    
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title,created_date) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      created_date: created_date,
      published: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle,updatedDate, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
          todo.created_date = updatedDate;
        }
        return todo;
      })
    );
  }
  const showRandomBySelected = () => {
    if(count < 10 ){
      return alert("please choose 10 exam in list below")
    }else{
      setIsOpen1(true);
    }
  }
  const showRandomBySystem = () => {
      setIsOpen2(true);
  }
  const closeModal2 = () => {
    setIsOpen2(false);
  }
  const closeModal1 = () => {
    setIsOpen1(false);
  }
  return (
    <>
            <div className="container">
              <div className="inner">
                <div className="rowFirst">
                <Header />
                </div>
                <div className="rowSecond">
                <InputTodo addTodoProps={addTodoItem} />
                </div>
                <div className="rowThird">
                  <div className="columnLeft"><button type="button" className="btnrandom1" name="randombyselected" onClick={showRandomBySelected}>Random by Selected</button></div>
                  <div className="columnCenter">Total selected: <b style={{color:"red"}}>{count}</b></div>
                  <div className="columnRight"><button type="button" className="btnrandom2" name="random" onClick={showRandomBySystem}>Random by Array</button></div>
                </div>
                <div className="rowFourth">
                <TodosList
                  todos={todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo}
                  setUpdate={setUpdate}
                />
                  </div>
                
              </div>
              <ModalRandomBySelected todos={todos} modalIsOpen1={modalIsOpen1} closeModal1={closeModal1}/>
              <ModalRandomBySystem todos={todos} modalIsOpen2={modalIsOpen2} closeModal2={closeModal2}/>
            </div>
    </>
  );
};

export default TodoContainer;
