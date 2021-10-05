import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, removeBookFromStoreProps }) => (
  <li key={book.id}>
    <p>
      {book.title}
      <span>
        {' '}
        by
        {book.author}
      </span>
    </p>
    <button
      type="button"
      onClick={() => {
        removeBookFromStoreProps(book.id);
      }}
    >
      Remove
    </button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,

  removeBookFromStoreProps: PropTypes.func.isRequired,
};

export default BookItem;
