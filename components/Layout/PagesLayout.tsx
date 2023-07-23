import React from 'react'
import Navbar from '@/components/Navbar'

export const PagesLayout = ({
  children,
  title
}: {
  children: React.ReactNode,
  title: string
}) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
