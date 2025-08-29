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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="./images/book-1.jpg" alt="The Silent Patient: The Recordr" />
)
const Title = () => <h2>The Silent Patient: The Recordr</h2>
const Author = () => {
  return <h2>Alex Michaelides</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
