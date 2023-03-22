import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export function App() {
  const [picName, setPicName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!picName) {
      return;
    }
    fetchImages(picName, currentPage);
  }, [currentPage, picName]);

  async function fetchImages(query, page) {
    setIsLoading(true);
    try {
      const res = await axios('https://pixabay.com/api/', {
        params: {
          key: '33649719-b7fecbfe979c6e7e0b54f5aa7',
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          page: page,
          per_page: 12,
        },
      });
      setPictures(pictures => [...pictures, ...res.data.hits]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const changePageHandler = () => {
    setCurrentPage(s => s + 1);
  };

  const handleFormSubmit = picName => {
    setPicName(picName);
    setPictures([]);
    setCurrentPage(1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      {pictures.length ? <ImageGallery pictures={pictures} /> : null}
      {isLoading && <Loader />}
      {pictures.length ? (
        <Button title="Load more" onClick={changePageHandler} />
      ) : null}
      {error && alert(error.message)}
    </div>
  );
}
