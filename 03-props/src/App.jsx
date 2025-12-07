import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Sharvan" age = {23} img = "https://images.unsplash.com/photo-1763987209766-d9bb8836c0e2?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Shivan" age = {21} img = "https://media.istockphoto.com/id/973570670/photo/silver-sportscar-studio-shot.jpg?s=1024x1024&w=is&k=20&c=UtMeFYuQ2nln-jHwl60284AqMvOfYtFgN4Q9II7sFaY="/>

    </div>
  )
}

export default App
