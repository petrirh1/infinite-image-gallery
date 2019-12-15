import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = () => {
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const count = 25;

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  const fetchImages = () => {
    setStart(start + count);

    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setHasMore(false);
      });
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={hasMore}
      endMessage={<h5>You've just reached the end of the internet.</h5>}
      scrollThreshold={0.85}>
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
