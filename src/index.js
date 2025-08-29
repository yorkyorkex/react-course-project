import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'The Silent Patient: The Recordr'
  const author = 'Alex Michaelides'
  const img = './images/book-1.jpg'

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
