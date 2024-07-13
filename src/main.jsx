import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import { Toaster } from 'react-hot-toast'
import SubmitForgetPage from './pages/submit-forget.jsx'
import ForgetPasswordPage from './pages/forget-password.jsx'
import ProfilePage from './pages/profile.jsx'
import DarkModeContextProvider from './context/DarkMode.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/forget/password',
    element: <ForgetPasswordPage />
  },
  {
    path: '/submit/forget/:token',
    element: <SubmitForgetPage />
  },
  {
    path: '/profile/:id',
    element: <ProfilePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Toaster />
      <RouterProvider router={router} />
    </DarkModeContextProvider>
  </React.StrictMode>,
)
