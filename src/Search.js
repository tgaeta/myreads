import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  handleBookSearch = (query) => {
    if (query === '') {
      this.setState(() => ({results: []}))
    } else {
        BooksAPI.search(query, 20).then(results => {
          if(results.error) {
            this.setState({results: []});
          } else {
            this.setState(() => ({results: results}))
          }
        })     
    }
};

  componentDidMount() {
    this.handleBookSearch(this.state.query)
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
              onChange={(event) => this.handleBookSearch(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            <Book books={this.state.results} />
          </ol>
        </div>
      </div>
    );
  }
}

export default Search