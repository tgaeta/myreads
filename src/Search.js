import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    query: '',
    results: [],
    view: 'search',
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }))
  }

  componentDidMount() {
    BooksAPI.search('manage')
      .then((results) => {
        this.setState(() => ({
          results
        }))
      })
  }

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input 
              type='text' 
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            <Book books={this.state.results} view={this.state.view} />
          </ol>
        </div>
      </div>
    );
  }

  static propTypes = {
    view: PropTypes.string.isRequired,
  }
}


export default Search