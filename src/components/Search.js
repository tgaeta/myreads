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

  render() {
    const { books, onChangeShelf } = this.props
    const { results } = this.state
    const correctedBooks = results.map(result => {
      const assignShelf = books.find( book => book.id === result.id)
      return Object.assign({}, assignShelf, result)
    })

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
            { correctedBooks.map(book =>
              <li key={book.id}>
                <Book book={book} onChangeShelf={onChangeShelf} />
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
