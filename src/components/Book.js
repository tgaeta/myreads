import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const { books, onChangeShelf } = props

  let book
  if (books) {
    book = books.map(book => (
      <li key={book.id}>
        <div className='book'>
          <div className='book-top'>
            {book.imageLinks === undefined ? (
              <div className='book-cover' style={{ width: 128, height: 193 }} />
            ) : (
              <div
                className='book-cover'
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }}
              />
            )}
            <BookShelfChanger
              book={book}
              onChangeShelf={onChangeShelf}
              activeShelf={book.shelf || 'none'}
            />
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{book.authors}</div>
        </div>
      </li>
    ))
  } else {
    book = <p> No results </p>
  }

  return <ol className='books-grid'>{book}</ol>
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book
