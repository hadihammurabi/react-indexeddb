import React from 'react';

export default ({ onBaru }) => {
  return (
    <div>
      <input type="text" onKeyUp={e => onKeyUp(e, onBaru)}/>
    </div>
  )
}

const onKeyUp = (e, onBaru) => {
  if (e.keyCode === 13) onBaru(e.target.value);
}
