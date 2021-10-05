import React from 'react';

const AddBook = () => (
  <form>
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Book Author" />
    <button type="button">Add New Book</button>
  </form>
);

export default AddBook;
