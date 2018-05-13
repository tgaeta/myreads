import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = props => {
  const { books, bookshelfTitle, onChangeShelf } = props

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{bookshelfTitle}</h2>
      <div className='bookshelf-books'>
        <Book books={books} onChangeShelf={onChangeShelf} />
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array,
  onChangeShelf: PropTypes.func.isRequired,
  bookshelfTitle: PropTypes.string.isRequired
}

export default BookShelf
