import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Search from '../components/Search'
import { Route } from 'react-router-dom'
import '../styles/App.css'
import { Link } from 'react-router-dom'
import BookShelf from '../components/BookShelf'

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

  render() {
    const readingStatus = [
      {status: 'Currently Reading'},
      {status: 'Want to Read'},
      {status: 'Read'},
    ]
    
    const BookShelfElement =
      readingStatus.map((book, i) => (
        <BookShelf key={i} bookshelfTitle={book.status} books={this.state.books} />
      ))

    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <Search />
        )} />    
        <Route exact path='/' render={() => (
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
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
