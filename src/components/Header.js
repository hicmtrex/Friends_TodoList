import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import TodoContext from '../context/todo-context';

const Header = () => {
  const { userInfo, logout } = useContext(TodoContext);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='md'
        style={{ backgroundColor: '#F08080' }}
        variant='dark'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>TodoList</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/addtodo'>
                <Nav.Link>Add Todo</Nav.Link>
              </LinkContainer>
            </Nav>
            {userInfo && (
              <Nav>
                <Nav.Link>{userInfo?.email}</Nav.Link>
                <Nav.Link onClick={() => logout()}>logout</Nav.Link>
              </Nav>
            )}

            {!userInfo && (
              <Nav>
                <LinkContainer to='/register'>
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
