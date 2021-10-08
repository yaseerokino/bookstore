import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookItem from '../components/BookItem';
import AddBook from '../components/AddBook';
import { addBook, removeBook, getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => ({ ...state }));
  const getBooksFromStore = () => {
    dispatch(getBooks());
  };

  useEffect(() => {
    getBooksFromStore();
  }, []);

  const addBookToStore = (newBook) => {
    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <main className="container">
      <section className="books">
        {!!books && (
          <ul className="book-list">
            {books.map((book) => (
              <BookItem
                key={book.item_id}
                book={book}
                removeBookFromStoreProps={removeBookFromStore}
              />
            ))}
          </ul>
        )}
      </section>
      <hr className="divider" />
      <section>
        <AddBook addBookToStoreProps={addBookToStore} />
      </section>
    </main>
  );
};

export default Books;
