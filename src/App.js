import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  // استخدام useState لإدارة الحالة
  const [books, setBooks] = useState([
    { id: 1, title: "بينما ينام العالم ", author: "سوزان أبو الهوى ", isbn: "978-99921-42-59-2" },
    { id: 2, title: "الحاوي في الطب", author: "ابو بكر الرازي", isbn: "893847239479" },
    { id: 3, title: " قناديل ملك الجليل ", author: "	إبراهيم نصر الله  ", isbn: "	978-6144-21-468-8" },
    { id: 4, title: "  أرني أنظر إليك ", author: " خولة حمدي ", isbn: "893847239479" }
  ]);

  return (
    <div className="App">
      <Header />
      <Main books={books} />
      <Footer />
    </div>
  );
};

export default App;