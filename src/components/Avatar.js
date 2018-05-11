import React from 'react';

const Avatar = (props) => {
  const { src, alt } = props;
  const bn = `https://github.com/ctrlaltpat/util/raw/master/bluenoise.gif`;
  return (
    <div id="avatar">
      <img src={ src|| bn} alt={ alt } />
    </div>
  )
}

export default Avatar;
