import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import { Container, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Form/>
        </Row>
        <Row>
          <List/>
        </Row>
      </Container>
    );
  }
}

export default App;
