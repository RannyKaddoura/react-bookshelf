import React from 'react'
import './App.css'
import Book from './Book'

class WantToRead extends React.Component {


	render () {

    // destructuring props so can be called without 'this.props'
    const { books, changeShelf } = this.props

    return (


		<div className="bookshelf">
	      <h2 className="bookshelf-title">Want To Read</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">

	        {/* must bind changeShelf func for it to be passed as a prop to Book.js */}
	        {books.filter(book => book.shelf === 'wantToRead').map((book) => <Book key={book.id} book={book} changeShelf={changeShelf} />)}
	        </ol>
	      </div>
	    </div>

	)}
}

export default WantToRead