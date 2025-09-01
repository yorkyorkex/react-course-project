const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => {}}>Click Me</button>
      <h4>{author}</h4>
    </article>
  )
}
export default Book
