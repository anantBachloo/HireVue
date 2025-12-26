import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SignedOut,SignedIn,UserButton,SignInButton,SignOutButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
    <hi>Welcome to the app</hi>
    <SignedOut>
      <SignInButton mode="modal">  
        <button>Login</button>
      </SignInButton>  
    </SignedOut>

    <SignedIn>
      <SignOutButton mode="modal"/>  
    </SignedIn>

    <UserButton/>
    </>
  )
}

export default App
