import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const { books } = this.props

    const readingStatus = [
      {status: 'Currently Reading'},
      {status: 'Want to Read'},
      {status: 'Read'},
    ]

    const BookShelfLabel =
      readingStatus.map((book, i) => (
        <BookShelf key={i} status={book.status} books={books} />
      ))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {BookShelfLabel}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}


export default ListBooks