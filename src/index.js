import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = ({ author, title, img }) => {
  const handleButtonClick = () => {
    alert(title)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={handleButtonClick}>Click Me</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
