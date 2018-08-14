import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import Ternak from './components/Ternak';
import { Container, Row } from 'reactstrap';
import { get } from './services/ternak';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baru: '',
      ternak: {},
      data: []
    };
  }

  onBaru (baru) {
    const data = [...this.state.data, { nama: baru }];
    this.setState({
      ...this.state,
      data
    });
  }

  onItemClick (ternak) {
    this.setState({
      ...this.state,
      ternak
    })
  }

  render() {
    get(ternak => {
      this.setState({ ...this.state, data: ternak });
    })
    return (
      <Container>
        <Row>
          <Ternak ternak={this.state.ternak}/>
        </Row>
        <Row>
          <Form onBaru={b => this.onBaru(b)}/>
        </Row>
        <Row>
          <List
            data={this.state.data}
            baru={this.state.baru}
            onItemClick={item => this.onItemClick(item)}/>
        </Row>
      </Container>
    );
  }
}

export default App;
