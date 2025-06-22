import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ActivitySection from './components/ActivitySection'
import FeaturesSection from './components/FeaturesSection'
import DownloadSection from './components/DownloadSection'
import AssuranceSection from './components/AssuranceSection'
import Testimonial from './components/Testimonial'
import CompanyLogos from './components/CompanyLogos'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='z-3 bg-[#00040F] text-white relative min-h-screen overflow-x-hidden'>
    <div className=' -z-10 absolute top-[252px] -left-50 w-[500px] h-[500px] bg-gradient-to-tr from-white/20 to-green-50/10 rounded-full blur-[100px]'></div>
    <div className=' -z-10 absolute top-[90px] left-[998px] w-[500px] h-[500px] bg-gradient-to-tr from-white to-green-50 rounded-full blur-[750px]'></div>
    <div className='overflow-hidden '>
    <Navbar/>
    <Hero />
    <ActivitySection />
    <FeaturesSection />
    <DownloadSection />
    <AssuranceSection />
    <Testimonial />
    <CompanyLogos />
    <NewsletterSection />
    <Footer />
      </div>
    </main>
  )
}

export default App