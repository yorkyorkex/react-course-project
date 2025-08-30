import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}

function Booklist() {
  return (
    <section className="booklist">
      <Book book={firstBook} id={1}>
        <p>Best Book Ever</p>
      </Book>
      <Book book={secondBook} id={2}>
        <p>Another Great Book</p>
      </Book>
    </section>
  )
}

const Book = ({ book, children }) => {
  const { author, title, img } = book
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h2>{children}</h2>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
