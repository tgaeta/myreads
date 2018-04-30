import React, { Component } from 'react'

class Book extends Component {

  render() {
    const { books } = this.props    
    
    const bookShelfChanger = (
      <div className='book-shelf-changer'>
        <select>
          <option value='none' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    )

    const book = (
      <li>
        {books.map((book) => (
          <div className='book' key={book.id}>
            <div className='book-top'>
              <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
              {bookShelfChanger}
            </div>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors.join(', ')}</div>
          </div>
        ))}        
      </li>
    )

    return (
      <ol className='books-grid'>
        {book}
      </ol>
    );
  }
}

export default Book