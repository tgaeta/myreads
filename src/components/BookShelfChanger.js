import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.string,
  }

  render() {
    const { book } = this.props
    return (
      <div className='book-shelf-changer'>
        <select defaultValue={book.shelf || 'none'} >
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

export default BookShelfChanger