import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Services from './components/Services'
import Products from './components/Products'
import Category from './components/Category'
import OldestCraft from './components/OldestCraft'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import TredningProducts from './components/TredningProducts'
import Brands from './components/Brands'
import NewArrivals from './components/NewArrivals'
import Faqs from './components/Faqs'
import  Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Category />
      <OldestCraft />
      <Testimonials />
      <Story />
      <TredningProducts />
      <Brands />
      <NewArrivals />
      <Faqs />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
