import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import TodoContext from './todo-context';

const TodoProvider = ({ children, match }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const todoHandle = (
    id,
    name,
    email,
    image,
    image2,
    job,
    phone,
    age,
    description,
    cb
  ) => {
    setTodos([
      ...todos,
      { id, name, email, image, image2, job, phone, age, description },
    ]);
    if (cb) {
      cb();
    }
  };

  const deletTodo = (product) => {
    setTodos(todos.filter((item) => item.id !== product.id));
  };

  const uploadTodo = (
    id,
    name,
    email,
    image,
    image2,
    job,
    phone,
    age,
    description
  ) => {
    const exist = todos.find((p) => p.id === id);
    setTodos(
      todos.map((x) =>
        x.id === id
          ? {
              ...exist,
              name,
              email,
              image,
              image2,
              job,
              phone,
              age,
              description,
            }
          : x
      )
    );
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUserInfo(user);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleRegister = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError('Password do not match');
      return;
    }
    setLoading(true);
    try {
      const userRegister = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      setUserInfo(userRegister);
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUserInfo(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUserInfo(u);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    const cardTrain = localStorage.getItem('cardTrain');
    if (cardTrain != null) setTodos(JSON.parse(cardTrain));
  }, [userInfo]);

  useEffect(() => {
    localStorage.setItem('cardTrain', JSON.stringify(todos));
  }, [todos, match]);

  const todoCtx = {
    todos,
    loading,
    userInfo,
    isAuth,
    error,
    logout,
    addTodo: todoHandle,
    deletTodo,
    uploadTodo,
    setTodos,
    handleLogin,
    handleRegister,
  };

  return (
    <TodoContext.Provider value={todoCtx}>{children} </TodoContext.Provider>
  );
};

export default TodoProvider;
