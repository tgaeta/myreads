import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf status='Search Results' books={this.state.query} />
          </ol>
        </div>
      </div>
    );
  }
}

export default Search