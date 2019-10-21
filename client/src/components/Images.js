import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(30);
  const [start, setStart] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setStart(start + count);
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch(err => console.log(err)); // for now..
  };

  return (
    <InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={true} endMessage={<h5>no more images..</h5>}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='container'>
          {images.map((image, index) => (
            <Image key={index} image={image} />
          ))}
        </div>
      )}
    </InfiniteScroll>
  );
};

export default Images;
