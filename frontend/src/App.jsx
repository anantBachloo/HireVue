import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useUser } from "@clerk/clerk-react";
import {SignedOut,SignedIn,UserButton,SignInButton,SignOutButton } from '@clerk/clerk-react'
import {Navigate,Route,Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import ProblemsPage from './Pages/ProblemsPage'
import { Toaster } from "react-hot-toast";
import DashboardPage from "./Pages/DashboardPage";
function App() {
  const { isSignedIn,isLoaded} = useUser();
  // this will get rid of the flickering effect
  if (!isLoaded) return null;
  return (
    <>
    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
      <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
    <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
    </Routes>
    
    <Toaster/>
    </>
  )
}

export default App
