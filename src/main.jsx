// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout.jsx'
import About from './AllPages/About/About.jsx'
import Contact from './AllPages/Contact/Contact.jsx'
import Auth from "./AllPages/Auth/AuthLayout.jsx";
import Login from './AllPages/Auth/Login/Login.jsx'
import Register from './AllPages/Auth/Register/Register.jsx'
import NotFound from './NotFound.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>

    <Routes>

      <Route element={<Layout />}>

        <Route index element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

      </Route>

      <Route element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Routes>

  </BrowserRouter>
  //</StrictMode>,
)
