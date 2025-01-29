// src/components/BookForm.js
import { useState } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "books"), { title, author, deleted: false });
    setTitle("");
    setAuthor("");
  };

  const softDeleteBook = async (bookId) => {
    await updateDoc(doc(db, "books", bookId), { deleted: true });
  };

  return (
    <div>
      <form onSubmit={addBook}>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
      <button onClick={() => softDeleteBook("BOOK_ID")}>Soft Delete Book</button>
    </div>
  );
};

export default BookForm;
