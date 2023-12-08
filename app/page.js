import Container from './components/Container'
import Slider from './components/slider/page'
import HomeBanner from './components/homeBanner/page'
import MissionCorasole from './components/missionCorasole/page'
import OurClients from './ourClients/page'


export default function Home() {
  return (
    <div>
      <Container>
          <Slider img1= {'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} img2={'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'} img3={'https://images.pexels.com/photos/8159/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} img4={'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600'} />
      </Container>

      <HomeBanner />

      <Container>
        {/* !!!!!!!!!!!!! welcome to safety plus training !!!!!!!!!!!!!!!!! */}
        <div className='  py-8 '>

          <div className='upper-content my-8  container'>
            <h1 className='text-4xl  font-bold uppercase  text-primary-green'>Welcome to SAFETY PLUS TRAINING INTERNATIONAL</h1>
            <p className=' text-lg text-gray-500 py-3 '>
              We are Occupational Safety, Health, Environment and Quality management advisors, trainers, consultants, auditors, and developers of human Resources with efficient provision of OSHEQ services”. The Prime Objective of PAK Safety Solutions is to provide quality services in the area of occupational Safety, Health, Environment, and Quality management as well as the provision of international training. We have a competent team having expertise in their respective fields ensuring to meet the international quality standards with unique skills and experience. Our advisors, trainers, auditors, and consultants have worked on and successfully completed many projects in Pakistan, Qatar, Saudi Arabia, Kuwait, UAE, Oman, and Bahrain and recognized by the respective clients and authorities. PAK Safety Solutions team almost covers every industry (e.g. Petroleum, Oil & Gas, Construction, Engineering, Manufacturing, Fertilizer, Cement, Paper, Telecom, and General industry).
            </p>
          </div>

          <div className='lower-content container'>
            <h1 className='text-3xl  font-semibold  text-black'>Why choose SAFETY PLUS TRAINING?</h1>
            <p className=' text-lg text-gray-500 py-3 '>
              Our Policy is to prioritize the Client’s business needs. Though there are several companies providing conventional solutions & services in OSHEQ, by choosing us, you’ll feel the difference due to our unique pattern of imparting training, with high-profile foreign & local trainers having extensive experience of a number of years in diversified environments.
            </p>
          </div>

          <div className='button-div flex justify-end container'>
            <button className='bg-primary-green hover:bg-primary-hover-blue text-white font-semibold px-3 py-2 my-2 '>FIND OUT MORE ABOUT US</button>
          </div>

        </div>

   
     {/* !!!!!!!!!!!!!!!!!!!!!!! our clients !!!!!!!!!!!!!!!!!!!!!!!!! */}


     <OurClients/>


      </Container>
       
    
    </div>
  )
}
