import React from 'react';
import { Container, InputGroup, Input } from 'reactstrap';

export default ({ onBaru }) => {
  return (
    <Container>
      <InputGroup>
        <Input type="text" placeholder="Tekan <enter> untuk menyimpan." onKeyUp={e => onKeyUp(e, onBaru)}/>
      </InputGroup>
    </Container>
  )
}

const onKeyUp = (e, onBaru) => {
  if (e.keyCode === 13 && e.target.value !== ''){
    onBaru(e.target.value);
    e.target.value = '';
  }
}
