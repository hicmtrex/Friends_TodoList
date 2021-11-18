import ParticlesBg from 'particles-bg';
import React, { useContext } from 'react';
import { Col, Row, Image, ListGroup, Carousel, Button } from 'react-bootstrap';
import TodoContext from '../context/todo-context';
import icon from '../components/icon';

const TodoScreen = ({ match, history }) => {
  const { todos, deletTodo, userInfo } = useContext(TodoContext);
  const todo = todos.find((item) => item.id === match.params.id);

  const deleteTodoHandler = () => {
    if (window.confirm('Are you sure?')) {
      deletTodo(todo);
      history.push('/');
    }
    return;
  };

  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    body: icon,
    position: 'all',
    //color: ["random", "#ff0000"],
    cross: 'dead',
    random: 10,
  };

  return (
    <Row className='mt-3'>
      <ParticlesBg type='custom' config={config} bg={true} />
      <Col md={6}>
        <Carousel>
          <Carousel.Item>
            <Image
              style={{ height: '30rem', width: '35rem' }}
              variant='top'
              className='d-block w-100'
              src={todo?.image}
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ height: '30rem', width: '35rem' }}
              variant='top'
              className='d-block w-100'
              src={todo?.image2}
              alt='First slide'
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={4}>
        <h1>{todo.name}</h1>
        <ListGroup variant='flush'>
          <ListGroup.Item as='h3'>{todo.job}</ListGroup.Item>
          <ListGroup.Item>Email: {todo.email}</ListGroup.Item>
          <ListGroup.Item>Phone: {todo.phone}</ListGroup.Item>
          <ListGroup.Item>{todo.description}</ListGroup.Item>
          <ListGroup.Item>
            <Button
              disabled={!userInfo}
              onClick={() => history.push(`/edit/${match.params.id}`)}
              className='mx-2  col-4'
            >
              <i class='fas fa-user-edit'></i>
            </Button>
            <Button
              disabled={!userInfo}
              onClick={deleteTodoHandler}
              className='mx-2 btn btn-danger  col-4'
            >
              <i class='fas fa-trash-alt'></i>
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default TodoScreen;
