import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Search from '../components/Search'
import {Route} from 'react-router-dom'
import '../styles/App.css'
import {Link} from 'react-router-dom'
import BookShelf from '../components/BookShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState(() => ({books}), () => this.setBooksToShelf(this.state.books))
      })
  }

  setBooksToShelf = (books) => {
    let currently = []
    let want = [] 
    let reading = []
    const cases = {
      currentlyReading: (book) => currently.push(book),
      wantToRead: (book) => want.push(book),
      read: (book) => reading.push(book)
    }
    // use forEach since you aren't returning values from your map iterations
    books.forEach(book => {
      const updateArray = cases[book.shelf]
      if (updateArray) {
        updateArray(book)
      } 
   })

    this.setState(() => ({currentlyReading: currently, wantToRead: want, read: reading}))
  }

  render() {
    return (
      <div className='app'>
        <Route path='/search' render={() => (<Search/>)}/>
        <Route
          exact
          path='/'
          render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf bookshelfTitle='Currently Reading' books={this.state.currentlyReading}/>
                <BookShelf bookshelfTitle='Want to Read' books={this.state.wantToRead}/>
                <BookShelf bookshelfTitle='Read' books={this.state.read}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
