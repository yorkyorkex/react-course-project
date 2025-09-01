const Book = ({ author, title, img, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => {}}>Click Me</button>
      <h4>{author}</h4>
      <span className="number">Book Number: {`#${number + 1}`}</span>
    </article>
  )
}
export default Book
