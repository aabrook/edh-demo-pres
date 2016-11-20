import React from 'react'
import User from '../User'

export default ({ users, onClick }) => (
  <ul>
    {
      users && users.map((c, i) => (<li key={i}><User username={c.username} email={c.email} onClick={onClick} {...c} /></li>))
    }
  </ul>
)
