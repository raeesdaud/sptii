import React from 'react'
import SideSection from '../components/sideSection/page'
import Container from '../components/Container'

function page() {
  return (
  <Container>

    <div className='flex  space-x-11  my-3 '>
      <div className='right'>

      <SideSection/>
      </div>
      <div className='left my-4 '>
        <h1 className='text-3xl py-2 text-neutral-800 font-semibold'>CEO Message </h1>
         <p className='text-gray-600 text-lg'>In a world where safety is paramount and skilled professionals are in high demand, Safety Plus Training International stands as a beacon of hope, illuminating the path towards a safer and more secure future for all. Founded in Saudi Arabia in 2016 by Engr. Muhammad Khalid, Safety Plus Training International has embarked on a transformative journey, driven by a vision to become a world-leading organization, empowering individuals and organizations to combat unemployment through innovative training, support, and opportunity creation initiatives.</p>
         <p className='text-gray-600 text-lg pt-3'>At the heart of our mission lies an unwavering commitment to excellence, we are committed to equipping individuals with the skills and knowledge they need to succeed in the workforce, effectively reducing unemployment and fostering a culture of safety awareness. Through comprehensive training programs and unwavering support, we empower individuals to transform their lives, secure fulfilling careers, and contribute to a safer and more prosperous world.</p>
         <p className='text-gray-600 text-lg pt-3'>At Safety Plus Training International, we believe that safety is a shared responsibility, and we invite you to join us on our mission to create a safer and more secure world. Together, we can empower individuals, bridge the skills gap, and foster a world where safety is not just a priority, but a way of life.</p>
         <h3 className='text-lg font-semibold my-4 text-right text-primary-green'>Engr. Muhammad Khalid, CEO</h3>
      </div>
    </div>

  </Container>
  )
}

export default page