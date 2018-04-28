import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

  render() {
    const readingStatus = [
      {status: 'Currently Reading'},
      {status: 'Want to Read'},
      {status: 'Read'},
    ]

    const BookShelfElement =
      readingStatus.map((book, i) => (
        <BookShelf key={i} status={book.status} />
      ))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {BookShelfElement}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks