import React from 'react';
import './css/Image.css';

const Image = ({ image }) => {
  console.log(image);

  return (
    <div className='img-container'>
      <img className='image' src={image.urls.regular} alt='' />
      <div className='details-container'>
        <div className='details'>
          <img
            className='profile-image'
            src={image.user.profile_image.medium}
            alt=''
          />
          <p className='username'>
            <a
              href={image.user.links.html}
              target='_blank'
              rel='noopener noreferrer'>
              {image.user.name}
            </a>
            <span>on</span>
            <a
              href='https://unsplash.com/'
              target='_blank'
              rel='noopener noreferrer'>
              Unsplash
            </a>
          </p>
          <a href={image.links.html} target='_blank' rel='noopener noreferrer'>
            <i className='material-icons'>link</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
