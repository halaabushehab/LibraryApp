import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, "books");
      const bookSnapshot = await getDocs(booksCollection);
      setBooks(bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    if (newBook.title && newBook.author) {
      await addDoc(collection(db, "books"), newBook);
      setNewBook({ title: "", author: "" });
    }
  };

  return (
    <div>
      <h2>Book Catalog</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button onClick={handleAddBook}>Add Book</button>

      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookCatalog;
