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
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExample = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="name"
          onChange={(e) => console.log(e.target.value)}
          style={{ border: '1px solid black' }}
        />
        <button type="submit">click me</button>
      </form>
      <button type="submit" onClick={() => console.log('click me')}></button>
    </section>
  )
}

const Book = ({ author, title, img }) => {
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
