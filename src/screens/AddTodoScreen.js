import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import TodoContext from '../context/todo-context';

const AddTodoScreen = () => {
  const history = useHistory();
  const { addTodo } = useContext(TodoContext);

  const lorem =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquid laboriosam dignissimos libero facilis odio aliquam quam dolorem expedita, rerum accusantium molestiae illo aperiam impedit corrupti voluptas quasi delectus! Adipisci.';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const [job, setJob] = useState('');
  const [description, setDescription] = useState(lorem);
  const [phone, setPhone] = useState(0);
  const [age, setAge] = useState(0);

  const id = Math.floor(Math.random() * 100).toString();
  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo(id, name, email, image, image2, job, phone, age, description, () =>
      history.push('/')
    );
    alert('Todo Added');
    setName('');
    setEmail('');
    setImage('');
    setJob('');
    setPhone('');
  };

  return (
    <Row className='justify-content-md-center'>
      <Col md={4}>
        <Form>
          <Form.Group controlId='name' className='mb-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='name'
            />
          </Form.Group>
          <Form.Group controlId='email' className='mb-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='email'
            />
          </Form.Group>
          <Form.Group controlId='image' className='mb-2'>
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type='url'
              placeholder='image url'
            />
          </Form.Group>
          <Form.Group controlId='image2' className='mb-2'>
            <Form.Label>Image Url 2</Form.Label>
            <Form.Control
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
              type='url'
              placeholder='image url 2'
            />
          </Form.Group>
          <Form.Group controlId='email' className='mb-2'>
            <Form.Label>Job</Form.Label>
            <Form.Control
              value={job}
              onChange={(e) => setJob(e.target.value)}
              type='text'
              placeholder='job'
            />
          </Form.Group>
          <Form.Group controlId='phone' className='mb-2'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type='number'
              placeholder='phone'
            />
          </Form.Group>
          <Form.Group controlId='age' className='mb-2'>
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type='number'
              placeholder='age'
            />
          </Form.Group>
          <Form.Group controlId='description' className='mb-2'>
            <Form.Label>description</Form.Label>
            <Form.Control
              rows='3'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type='text'
              placeholder='description'
            />
          </Form.Group>
          <Button onClick={addTodoHandler}>Add Todo</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddTodoScreen;
