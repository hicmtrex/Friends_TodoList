import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  error: false,
  isAuth: false,
  userInfo: {},
  addTodo: () => {},
  deletTodo: () => {},
  uploadTodo: () => {},
  handleLogin: () => {},
  handleRegister: () => {},
});

export default TodoContext;
