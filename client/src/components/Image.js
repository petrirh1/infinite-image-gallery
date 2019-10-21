import React, { useState } from 'react';

const Image = ({ image }) => {
  const [details, setDetails] = useState({ name: '', link: '' });

  return (
    <img
      src={image.urls.regular}
      onMouseOver={() => setDetails({ name: image.user.name, link: image.links.html })}
      onClick={() => console.log(details)}
      alt=''
    />
  );
};

export default Image;
