import React from 'react';
import { GoPencil } from 'react-icons/go'

const Todo = ({ todo, complete, index, deleteTodo, showEdit, editTodo, toggleTodo, editInput}) => {
  const checkName = `check-${index}`;
  return (
    <>
      <div className='list' index={index}>
        <input type="checkbox" className="cb-complete" checked={complete} name={checkName} onChange={(e) =>toggleTodo(e,index)}/>
        <h3 className='todo-item'>{todo}</h3>
        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          x
        </button>
        <button className='btn-edit' onClick={() => showEdit(index)}>
          <GoPencil/>
        </button>
      </div>
      <form className='edit' name='edit' onSubmit={(e) => e.preventDefault()}>
             <input type="text" className="input-edit"/> <button className="editing-btn" onClick={() => editTodo(index)}>v</button>
      </form>
    </>
  );
};

export default Todo;
