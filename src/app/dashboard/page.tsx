"use client"
import React from 'react'
import withAuth from '@/components/Auth/withAuth';

function page() {
  return (
    <div className='flex items-center justify-center h-full'>page</div>
  )
}

export default withAuth(page)