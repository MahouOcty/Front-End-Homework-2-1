import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    {
      todo: 'todo 1',
      complete: true,
    },
    {
      todo: 'todo 2',
      complete: false
    }
  ]);
  

  // Esto maneja el cambio del input
  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });

  const handleEdit = (e) => setTodo({ [e.target.name]: e.target.value });
  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    }
    todo.complete = false;
    setTodos([...todos, todo]);
  };

  const toggleTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].complete = e.target.checked;
    setTodos(newTodos);
  }
  // Elimina el todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const showEdit = (index) => {
    const editList = document.getElementsByClassName("edit");
    const edit = editList[index];
    edit.classList.add('show');
  }
  
  const editTodo = (index) => {
  }


  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar todo</label>
        <br />
        <input type='text' name='todo' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          complete={value.complete}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          showEdit={showEdit}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
          editInput={handleEdit}
        />
      ))}
    </>
  );
};

export default Form;
