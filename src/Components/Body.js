import React, { useState } from 'react'

export default function Body() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = (event) => {
    var users = JSON.parse(localStorage.getItem('users') || '[]')
    event.preventDefault()
    var newUser = {
      name: name,
      username: username,
      password: password,
    }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    alert('Register Successfully')
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://waichung2848t.files.wordpress.com/2012/11/fb-connection.jpg'
            alt='Not Found'
          />
        </div>
        <div className='col-md-4'>
          <h1>Register</h1>
          <form onSubmit={registerUser}>
            <input
              type='text'
              placeholder='name'
              className='form-control'
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
            />
            <input
              type='text'
              placeholder='username'
              className='form-control'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              value={username}
            />
            <input
              type='text'
              placeholder='password'
              className='form-control'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
            />
            <input type='submit' className='btn btn-primary' value='SIGN UP' />
          </form>
        </div>
      </div>
    </div>
  )
}
