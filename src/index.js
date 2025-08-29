import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h1>John Doe</h1>
const Message = () => {
  return <p>This is my first React component!</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
