import React from 'react'

export default function ProfilePage({params}:any) {
  return (
    <div>
        <h1>Profile</h1>
        <span>{params.id}</span>
    </div>
  )
}
