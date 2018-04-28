import React, { Component } from 'react'
import Book from './Book'

import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
  }
  state = {
    status: 'Currently Reading'
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <Book />
        </div>
      </div>
    );
  }
}

export default BookShelf