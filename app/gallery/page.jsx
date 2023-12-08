import React from 'react'
import Container from '../components/Container'
import SideSection from '../components/sideSection/page'

function page() {
  return (
    <Container>
      <div className='flex  space-x-11  my-3 '>
        <SideSection/>
      </div>
    </Container>
    )
}

export default page