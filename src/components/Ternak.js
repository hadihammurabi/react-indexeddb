import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

export default ({ ternak }) => {
  if (!ternak.nama) ternak = { nama: 'TERNAK' };
  return (
    <Container className="text-center">
      <Jumbotron>{ternak.nama.toUpperCase()}</Jumbotron>
    </Container>
  )
}
