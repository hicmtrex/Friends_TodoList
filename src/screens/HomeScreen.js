import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Todo from '../components/Todo';
import TodoContext from '../context/todo-context';
import ParticlesBg from 'particles-bg';

const HomeScreen = () => {
  const { todos } = useContext(TodoContext);

  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 15,
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }

  return (
    <Row>
      <h1 className='text-center mb-5'>Friends Todo CardList</h1>
      {todos?.map((todo) => (
        <Col md={3} key={todo.id} className='mb-5'>
          <Todo todo={todo} />
        </Col>
      ))}
      <ParticlesBg type='custom' config={config} bg={true} />
    </Row>
  );
};

export default HomeScreen;
