import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const AddBook = ({ addBookToStoreProps }) => {
  const [formInputs, setFormInputs] = useState({
    id: uuid(),
    title: '',
    category: '',
  });

  const onChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    if (formInputs.title && formInputs.category) {
      const newBook = {
        item_id: uuid(),
        title: formInputs.title,
        category: formInputs.category,
      };
      addBookToStoreProps(newBook);
    }
  };

  return (
    <>
      <p className="add-form-header">ADD NEW BOOK</p>
      <form className="add-form">
        <div className="add-form__left">
          <input
            className="add-form__input add-form__input--title"
            type="text"
            name="title"
            placeholder="Book Title"
            onChange={onChange}
            value={formInputs.title}
            required
          />
        </div>
        <div className="add-form__right">
          <input
            type="text"
            className="add-form__input add-form__input--category"
            name="category"
            placeholder="Book Category"
            onChange={onChange}
            value={formInputs.category}
            required
          />
          <button type="button" onClick={addBook} className="add-form__btn">
            Add New Book
          </button>
        </div>
      </form>
    </>
  );
};

AddBook.propTypes = {
  addBookToStoreProps: PropTypes.func.isRequired,
};

export default AddBook;
