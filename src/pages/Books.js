import React from 'react';
import BookItem from '../components/BookItem';
import AddBook from '../components/AddBook';

const books = [
  { id: 1, title: 'Last days at Forcados', author: 'No name' },
  { id: 2, title: 'Harry Potter', author: 'JK Rowlings' },
];
const Books = () => (
  <main>
    <section>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </section>
    <section>
      <AddBook />
    </section>
  </main>
);

export default Books;
