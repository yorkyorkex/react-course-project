import React from 'react'
import ReactDOM from 'react-dom/client'

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UL480_FMwebp_QL65_.jpg"
    alt="The Silent Patient: The Recordr"
  />
)
const Title = () => <h2>The Silent Patient: The Recordr</h2>
const Author = () => {
  return <h2>Alex Michaelides</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
