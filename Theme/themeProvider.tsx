"use client"

import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true)
  }, [])

  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem={false} >{children}</ThemeProvider>
  )
}


export default ThemesProvider;