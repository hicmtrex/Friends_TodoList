import ParticlesBg from 'particles-bg';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import TodoContext from '../context/todo-context';

const LoginScreen = ({ history }) => {
  const { handleLogin, loading, userInfo, error } = useContext(TodoContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo]);

  return (
    <FormContainer>
      <ParticlesBg type='random' bg={true} />
      <h1 className='text-center'>Login</h1>
      {error && <Message>{error.toString()}</Message>}
      {loading && <Spinner animation='border' />}
      <Form onSubmit={login}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Form.Group controlId='password' className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>

        <Button type='submit' className='mt-3 col-12'>
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
