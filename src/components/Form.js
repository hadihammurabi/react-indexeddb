import React from 'react';

export default () => (
  <div>
    <input type="text" onKeyUp={e => onKeyUp(e)}/>
  </div>
)

const onKeyUp = e => {
  if (e.keyCode === 13) console.log(e.target.value);
}
