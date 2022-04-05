import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa";
import moment from "moment";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    created_date: moment().format("YYYY-MM-DD"),
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(inputText.title.trim()) {
      props.addTodoProps(inputText.title, inputText.created_date);
      setInputText({
        title: "",
        created_date: moment().format("YYYY-MM-DD"),
      })
    } else {
      alert("Please write item")
    } 
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add exam..."
        value={inputText.title}
        name="title"          
        onChange={onChange}
      />
      <input 
      type="date" 
      name="created_date" 
      className="input-date" 
      value={inputText.created_date} 
      onChange={onChange}/>
      <button className="input-submit">
        <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
      </button>
    </form>
  )
}

export default InputTodo
