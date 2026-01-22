import AvailableCourses from '@/components/Availablecourses'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import PricingHero from '@/components/PricingHero'
import WhyPTP from '@/components/Ptp'
import QuestionMedium from '@/components/Question'
import QuestionTypes from '@/components/Questiontypes'
import MostRecommendedClasses from '@/components/Recomended'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AvailableCourses/>
    <MostRecommendedClasses/>
    <QuestionMedium/>
    <QuestionTypes/>
    <WhyPTP/>
    <Pricing/>
    <PricingHero/>
    <Footer/>
    </>
  )
}

export default page