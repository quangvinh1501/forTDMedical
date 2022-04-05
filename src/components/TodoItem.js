import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
const TodoItem = (props) => {
  const { published, id, title, created_date } = props.todo;
  const [editing, setEditing] = useState(false)
  const [_title, setTitle] = useState(title);
  const [_created_date, setDate] = useState(created_date);
  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  
  const handleUpdate = () => {
     if(_title.trim()) {
      props.setUpdate(_title, _created_date, id);
      setEditing(false);
    } else {
      alert("Please write item")
    } 
  }
  const updateExam = () => {
    setEditing(true);
  }
  return (
    <li className={styles.item}>
      <div style={viewMode}>
        <input 
          type="checkbox" 
          className={styles.checkbox}
          checked={published}
          value={id}
          onChange={(event) => props.handleChangeProps(event,id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{color: "#df170d", fontSize: "16px"}}/>
        </button>
        <button onClick={updateExam}>
          <AiOutlineEdit style={{color: "#057efb", fontSize: "16px"}}/>
        </button>
        <span style={published ? completedStyle : null} >{title} / {created_date}</span>
      </div>
      <div className="formUpdateContent">
        <div className="formUpdateLeft">
        <input 
        type="text" 
        style={editMode} 
        value={_title} 
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
        </div>
        <div className="formUpdateCenter">
        <input 
        type="date"
        name="created_date"
        style={editMode}
        value={_created_date} 
        onChange={(e) => setDate(e.target.value)}
      />
        </div>
        <div className="formUpdateRight">
        <button 
        style={editMode} 
        onClick={handleUpdate}>
          <MdDoneOutline style={{color: "green", fontSize: "16px"}}/>
        </button>
        </div>
      </div>
      
     
    </li>
  )
}

export default TodoItem