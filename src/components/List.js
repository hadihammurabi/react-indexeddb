import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

export default ({ baru, data, onItemClick }) => (
  <Container>
    <ListGroup>
      {data.map((d, i) => 
        (
          <ListGroupItem key={i} tag="button" action onClick={_ => onItemClick(d)}>
            {d.nama.toUpperCase()}
          </ListGroupItem>
        )
      )}
    </ListGroup>
  </Container>
)
