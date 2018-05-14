import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  updateBook(shelf) {
    this.props.onChangeShelf(this.props.book, shelf)
  }

  render() {
    const { book, activeShelf } = this.props
    return (
      <div className='book-shelf-changer'>
        <select defaultValue={activeShelf} onChange={e => this.updateBook(e.target.value)}>
          <option value='none' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    )
  }
}

BookShelfChanger.propTypes = {
  books: PropTypes.array,
  onChangeShelf: PropTypes.func.isRequired,
  activeShelf: PropTypes.string.isRequired
}

export default BookShelfChanger
