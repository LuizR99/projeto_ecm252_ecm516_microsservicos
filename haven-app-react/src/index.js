import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login'
import Register from './components/Register'

ReactDOM.render(
   <div>
      <Login />
      <Register />
   </div>,
   document.querySelector('#root')
)