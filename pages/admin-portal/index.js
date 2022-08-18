import React from 'react'
import Sidebar from '../../components/admin_hotel/Sidebar'
import Profile from './Profile'

export default function index() {
  return (
    <div>

      <div className='flex w-full'>
        <Sidebar />

        <div className='w-[90%] pt-10'>
          <Profile />
        </div>
      </div>

    </div>
  )
}
