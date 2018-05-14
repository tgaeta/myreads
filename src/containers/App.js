import React from 'react'
import { Route, Link } from 'react-router-dom'
import Search from '../components/Search'
import BookShelf from '../components/BookShelf'
import * as BooksAPI from '../utils/BooksAPI'
import '../styles/App.css'

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

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
      this.setBooksToShelf(this.state.books)
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState(
        () => ({ books }),
        () => this.setBooksToShelf(this.state.books)
      )
    })
  }

  setBooksToShelf = books => {
    let currently = []
    let want = []
    let reading = []
    const cases = {
      currentlyReading: book => currently.push(book),
      wantToRead: book => want.push(book),
      read: book => reading.push(book)
    }

    books.forEach(book => {
      const updateArray = cases[book.shelf]
      if (updateArray) {
        updateArray(book)
      }
    })

    this.setState(() => ({
      currentlyReading: currently,
      wantToRead: want,
      read: reading
    }))
  }

  render() {
    const bookShelves = [
      { title: 'Currently Reading', id: 'currentlyReading' },
      { title: 'Want to Read', id: 'wantToRead' },
      { title: 'Read', id: 'read' }
    ]
    return (
      <div className='app'>
        <Route path='/search'render={() => (
          <Search books={this.state.books} onChangeShelf={this.changeShelf} />
        )}/>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <div>
                {bookShelves.map((shelf, index) => (
                  <BookShelf
                    key={index}
                    bookshelfTitle={shelf.title}
                    onChangeShelf={this.changeShelf}
                    books={this.state[`${shelf.id}`]}
                  />
                ))}
              </div>
            </div>
            <div className='open-search'>
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
