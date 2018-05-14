import React from 'react'
import PropTypes from 'prop-types'

const BookShelfChanger = props => {
  const { book, onChangeShelf, activeShelf } = props
  
  const updateBook = shelf => {
    onChangeShelf(book, shelf)
  }

  return (
    <div className='book-shelf-changer'>
      <select defaultValue={activeShelf} onChange={e => updateBook(e.target.value)}>
        <option value='moveTo' disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  activeShelf: PropTypes.string.isRequired
}

export default BookShelfChanger
