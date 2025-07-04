// Test file to check TypeScript types - FIXED VERSION
/** @jsx React.createElement */
import React from 'react'
import Features from '@/components/home/Features'
import PopularSkills from '@/components/home/PopularSkills'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'

// This should not have TypeScript errors
export function TestComponent() {
  return (
    <div>
      <Features id="features" />
      <PopularSkills id="skills" />
      <HowItWorks id="how-it-works" />
      <Testimonials id="testimonials" />
    </div>
  )
}

export default TestComponent