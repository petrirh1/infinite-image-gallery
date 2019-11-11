import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = () => {
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const count = 35;

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
        console.log(images);
      })
      .catch(err => console.error(err)); // for now..
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      endMessage={<h5>You've reached the end of internet.</h5>}>
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
