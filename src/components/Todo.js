import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const Todo = ({ todo }) => {
  return (
    <Tilt className='Tilt'>
      <Link to={`/todo/${todo.id}`}>
        <Card
          className='shadow mb-3'
          style={{ width: '18rem', height: '33rem' }}
        >
          <Image style={{ height: '18rem' }} src={todo?.image} />
          <Card.Body>
            <Card.Title>{todo.name}</Card.Title>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>{todo.email}</ListGroup.Item>
            <ListGroup.Item>Job: {todo.job}</ListGroup.Item>
            <ListGroup.Item>Phone: {todo.phone} </ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </Tilt>
  );
};

export default Todo;
