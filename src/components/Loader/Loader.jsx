import css from './Loader.module.css';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.Loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
