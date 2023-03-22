import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(s => !s);
  };

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
          onClick={handleModalToggle}
        />
      </li>
      {showModal && (
        <Modal
          largeImage={largeImageURL}
          tags={tags}
          onClose={handleModalToggle}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
