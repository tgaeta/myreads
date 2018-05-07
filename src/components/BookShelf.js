import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    const { books, bookshelfTitle } = this.props
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <Book books={books}/>
        </div>
      </div>
    );
  }
}

export default BookShelf