import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class Search extends Component {
  state = {
    results: []
  }

  handleBookSearch = query => {
    if (query === '') {
      this.setState(() => ({
        results: []
      }))
    } else {
      BooksAPI.search(query).then(results => {
        if (results.error) {
          this.setState(() => ({
            results: []
          }))
        } else {
          this.setState(() => ({
            results: results
          }))
        }
      })
    }
  }

  // someFunction = (books, results) => {
  //   books.map(book => {
  //     this.setState(() => ({
  //       results: results.map(result => {
  //         if (book.name === result.name) {
  //           result['shelf'] = book.shelf
  //         }
  //       })
  //     }))
  //   })
  // }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.handleBookSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.results.map(book =>
              <li key={book.id}>
                <Book book={book} onChangeShelf={this.props.onChangeShelf} />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Search
