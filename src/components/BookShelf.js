import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const { books, bookshelfTitle, onChangeShelf } = props
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <Book books={books} onChangeShelf={onChangeShelf}/>
      </div>
    </div>
  )
}

export default BookShelf