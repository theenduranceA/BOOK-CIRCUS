import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => setBookDetails(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  const { volumeInfo } = bookDetails;

  return (
    <div className='book-details'>
      <div className='book-details-content'>
        {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail && (
          <img
            src={volumeInfo.imageLinks.thumbnail}
            alt={volumeInfo.title}
            className='book-cover'
          />
        )}
        <div className='book-details-desc'>
          <h3>TITLE: {bookDetails.volumeInfo.title}</h3>
          <h3>AUTHOR: {bookDetails.volumeInfo.authors}</h3>
          <h3>DESCRIPTION: </h3>
          <p>{bookDetails.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;