import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ pictures }) {
  return (
    <>
      {pictures.length ? (
        <ul className={css.ImageGallery}>
          {pictures.map(el => (
            <ImageGalleryItem
              key={el.id}
              webformatURL={el.webformatURL}
              largeImageURL={el.largeImageURL}
              tags={el.tags}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
}

ImageGallery.propTypes = { pictures: PropTypes.array.isRequired };
