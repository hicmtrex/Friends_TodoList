import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import AddTodoScreen from './screens/AddTodoScreen';
import TodoScreen from './screens/TodoScreen';
import TodoProvider from './context/TodoProvider';
import Footer from './components/Footer';
import EditScreen from './screens/EditScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <TodoProvider>
        <Header />
        <main className='py-3'>
          <Container>
            <Switch>
              <Route exact path='/' component={HomeScreen} />
              <Route path='/addtodo' component={AddTodoScreen} />
              <Route path='/todo/:id' component={TodoScreen} />
              <Route path='/edit/:id' component={EditScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/login' component={LoginScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </TodoProvider>
    </Router>
  );
}

export default App;
