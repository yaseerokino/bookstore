import React from 'react';
import BookItem from '../components/BookItem';
import AddBook from '../components/AddBook';

const Books = () => {
  return (
    <main>
      <section>
        <ul>
          <BookItem />
          <BookItem />
          <BookItem />
        </ul>
      </section>
      <section>
        <AddBook />
      </section>
    </main>
  );
};

export default Books;
