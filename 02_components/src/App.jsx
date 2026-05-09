import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';

const App = () => {

  const user = 'John Doe';
  const age = 30;
  return (
    <div>
    <h1>Hello, Guys i am App {user}</h1>
    <p>My age is {age}</p>
    <Card />
    <Navbar />

    </div>
  )
}

export default App
