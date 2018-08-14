import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default ({ baru, data }) => (
  <ListGroup>
    {data.map((d, i) => 
      (
        <ListGroupItem key={i}>
          {d}
        </ListGroupItem>
      )
    )}
  </ListGroup>
)
