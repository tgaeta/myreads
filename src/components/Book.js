import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const { books, onChangeShelf } = props

  let book
  if (books) {  
    book = books.map((book) =>
      <li key={book.id}>
        <div className='book'>
          <div className='book-top'>
          {book.imageLinks === undefined ? (
            <div className='book-cover' style={{ width: 128, height: 193 }}></div>
          ) : (
            <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
          )}
            <BookShelfChanger book={book} onChangeShelf={onChangeShelf} activeShelf={book.shelf || 'none'} />
          </div>
          <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors}</div>
        </div>
      </li>
    )
  } else {
    book = (<p> No results </p>)
  }
  return (
    <ol className='books-grid'>
      {book}
    </ol>
  )

}

export default Book