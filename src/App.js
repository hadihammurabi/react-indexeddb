import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import { Container, Row } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baru: '',
      data: []
    };
  }

  onBaru (baru) {
    const data = [...this.state.data, baru];
    this.setState({
      baru,
      data
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Form onBaru={b => this.onBaru(b)}/>
        </Row>
        <Row>
          <List data={this.state.data} baru={this.state.baru}/>
        </Row>
      </Container>
    );
  }
}

export default App;
