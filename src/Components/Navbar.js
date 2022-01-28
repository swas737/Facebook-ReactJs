import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const logout = () => {
    localStorage.removeItem('loggedin')
    navigate('/')
    window.location.reload(true)
  }
  const login = () => {
    var users = JSON.parse(localStorage.getItem('users'))
    var i = 0
    for (var user of users) {
      if ((user.username = username && user.password == password)) {
        i++
      }
    }
    if (i == 1) {
      alert('Login Successfull')
      localStorage.setItem('loggedin', 'loggedin')
      navigate('/dashboard')
      window.location.reload(true)
    } else {
      alert('Login Unsuccessfull')
    }
  }
  return (
    <div>
      <div className='row nav'>
        <div className='col-md-6'>
          <h1
            style={{
              color: 'white',
            }}
          >
            Facebook
          </h1>
        </div>
        <div className='col-md-6'>
          {(() => {
            if (localStorage.getItem('loggedin')) {
              return <button onClick={logout}>LogOut</button>
            } else {
              return (
                <div>
                  <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }}
                  />
                  <input
                    type='text'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  <button onClick={login}>Login</button>
                </div>
              )
            }
          })()}
        </div>
      </div>
    </div>
  )
}
