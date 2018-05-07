import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Search from '../components/Search'
import ListBooks from '../components/ListBooks'
import { Route } from 'react-router-dom'
import '../styles/App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  removeBook = (book) => {
    // logic to set a book to 'none'
  }

  updateBook = (book) => {
    // logic to set a book to 'want to read', 'currently reading', and 'read'
  }

  render() {
    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <Search />
        )} />    
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
