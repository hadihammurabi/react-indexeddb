import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';

export default ({ ternak, onUpdate, onDelete }) => {
  let view;
  if (!ternak.nama) {
    view = <Jumbotron>TERNAK</Jumbotron>
  } else {
    view = (
      <Jumbotron>
        <Row>
          <Col className="text-center">{ternak.nama.toUpperCase()}</Col>
        </Row>
        <Row>
          <Col sm="6">
            <Button size="sm" color="primary" onClick={_=> onUpdate(ternak)}>Ubah</Button>
          </Col>
          <Col sm="6">
            <Button size="sm" color="danger" onClick={_ => onDelete(ternak)}>Hapus</Button>
          </Col>
        </Row>
      </Jumbotron>
    )
  }
  return (
    <Container className="text-center">
      {view}
    </Container>
  )
}
