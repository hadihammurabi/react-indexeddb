import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import { Container, Row } from 'reactstrap';
import { get } from './services/ternak';

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
    get(ternak => {
      this.setState({ ...this.state, data: ternak });
    })
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
