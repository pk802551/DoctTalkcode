import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route ,Router} from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const ContactPage = lazy(() => import('../pages/ContactPages'));


function Routing() {
  return (
    <BrowserRouter basename='/'>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Routing