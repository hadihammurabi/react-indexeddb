import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

export default ({ baru, data }) => (
  <Container>
    <ListGroup>
      {data.map((d, i) => 
        (
          <ListGroupItem key={i}>
            {d.nama}
          </ListGroupItem>
        )
      )}
    </ListGroup>
  </Container>
)
