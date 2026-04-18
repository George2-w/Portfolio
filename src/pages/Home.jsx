import React, { Suspense } from 'react'
import ThemeToggle from '../component/themeToggle'
import Header from '../component/header'
import Hero from '../component/hero'
// import Model from '../component/ThreeD/models'
// import ClientCard from '../component/clientCard'
import Work from '../component/Work'
import Iconcard from '../component/iconcard'
import Footer from '../component/footer'





export default function Home() {
  return (
    <div className=''>
      <Header/>
      <ThemeToggle />
      <Hero/>
      <Work/>
      <Iconcard/>
      <Footer/>
    </div>
  )
}
