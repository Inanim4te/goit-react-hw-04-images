import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Searchbar({ onSubmit }) {
  const [picName, setPicName] = useState('');

  const inputChangeHandler = e => {
    setPicName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (picName.trim() === '') {
      return;
    }

    onSubmit(picName);
    setPicName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChangeHandler}
          value={picName}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
