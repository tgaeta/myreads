import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const { book, onChangeShelf } = props

  return (
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
      <div className='book-authors'>
        <div>
          {book.authors && book.authors.length > 1
            ? book.authors.join(', ')
            : book.authors}
        </div>
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book
