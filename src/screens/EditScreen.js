import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import TodoContext from '../context/todo-context';

const EditScreen = ({ match, history }) => {
  const { todos, uploadTodo } = useContext(TodoContext);
  const todo = todos.find((item) => item.id === match.params.id);
  const [name, setName] = useState(todo.name);
  const [email, setEmail] = useState(todo.email);
  const [image, setImage] = useState(todo.image);
  const [image2, setImage2] = useState(todo.image2);
  const [job, setJob] = useState(todo.job);
  const [description, setDescription] = useState(todo.description);
  const [phone, setPhone] = useState(todo.phone);
  const [age, setAge] = useState(todo.age);

  const handleUpload = (e) => {
    e.preventDefault();
    uploadTodo(
      match.params.id,
      name,
      email,
      image,
      image2,
      job,
      phone,
      age,
      description
    );
    history.push('/');
    alert('Todo Edited');
  };

  return (
    <Row className='justify-content-md-center'>
      <Col md={4}>
        <Form onSubmit={handleUpload}>
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
          <Form.Group controlId='text' className='mb-2'>
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
          <Button type='submit'>Upload Todo</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default EditScreen;
