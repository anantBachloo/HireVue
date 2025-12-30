import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useUser } from "@clerk/clerk-react";
import {SignedOut,SignedIn,UserButton,SignInButton,SignOutButton } from '@clerk/clerk-react'
import {Navigate,Route,Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import ProblemsPage from './Pages/ProblemsPage'
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn} = useUser();
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
    </Routes>
    
    <Toaster/>
    </>
  )
}

export default App
