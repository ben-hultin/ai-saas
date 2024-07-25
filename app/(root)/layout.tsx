import { SignedIn } from '@clerk/nextjs'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root" >
      <div className="root-container">
        <SignedIn>
          <div className="wrapper">
            {children}
          </div>
        </SignedIn>
      </div>
    </main>
  )
}

export default Layout