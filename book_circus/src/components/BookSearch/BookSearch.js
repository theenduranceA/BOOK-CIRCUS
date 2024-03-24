import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './BookSearch.css';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [startIndex, setStartIndex] = useState(0); 

  useEffect(() => {
    handleSearch();
  }, [startIndex, query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    setError('');
  };

  const handleSearch = async () => {
    try {
      if (!query) {
        setBooks([]);
        return;
      }

      const maxResults = 20; 

      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error searching books:', error);
      setError('Failed to fetch books. Please try again later.');
    }
  };

  const handleNextPage = () => {
    setStartIndex(startIndex + 20);
  };

  const handlePreviousPage = () => {
    setStartIndex(Math.max(startIndex - 20, 0));
  };

  const truncateDescription = (description, maxLength) => {
    if (description && description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className='book-search'>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by genre, title or author..."
      />
      <button onClick={handleSearch}>
        <FaSearch className='the-icon' size={15} />
      </button>
      {error && <p className="error-message">{error}</p>}
      {books.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <div className="book-list">
            {books.map((book) => (
              <Link
                to={`/book/${book.id}`}
                className="book-card"
                key={book.id}
              >
                <h2>{book.volumeInfo.title}</h2>
                <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                <p>{book.volumeInfo.publishedDate}</p>
                <img
                  src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <p>{truncateDescription(book.volumeInfo.description, 150)}</p>
              </Link>
            ))}
          </div>
          <div className="pagination-buttons">
            <button onClick={handlePreviousPage} disabled={startIndex === 0}>Previous Page</button>
            <button onClick={handleNextPage}>Next Page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSearch;