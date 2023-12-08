import React from 'react'

function page() {
  return (
    <>
      
      {/* <MainBanner one={"ENROLL"} two={"NOW"} /> */}
      <div className='box-shadow my-12 shodow-2xl flex justify-between mx-auto  bg-gray-100' style={{width:'70% ', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'}} >
       <div className='left-div w-2/5  py-12 px-8   '>
        <h1 className='text-primary-green text-2xl font-semibold'>Coarse Enroll now</h1>
        <p className='text-gray-600 font-semibold my-1'>Please fill all the fields for enroll in required coarse.</p>
        <div className='my-8'>
          <form>


            <div className='flex flex-col my-3 text-lg font-semibold text-primary-green'>
              <label>First Name</label>
              <input
               type='text'
               className='py-1 text-black outline-none my-1 px-3'
              ></input>
            </div>

            <div className='flex flex-col my-3 text-lg font-semibold text-primary-green' >
              <label>Last Name</label>
              <input
               type='text'
               className='py-1 outline-none text-black my-1 px-3'

              ></input>
            </div>

            <div className='flex flex-col my-3 text-lg font-semibold text-primary-green'>
              <label>Email</label>
              <input
               type='text'
               className='py-1 text-black  outline-none my-1 px-3'

              ></input>
            </div>

            <div className='flex flex-col my-3 text-lg font-semibold text-primary-green'>
              <label>Phone</label>
              <input
               type='text'
               className='py-1 text-black  outline-none my-1 px-3'

              ></input>
            </div>

           

            <div className='flex flex-col my-3 text-lg font-semibold text-primary-green'>
              <label>Select Course</label>
              <input
               type='text'
               
               className=' outline-none   text-black  py-1 my-1 px-3'

              ></input>
            </div>

           <button className='bg-primary-green text-white font-semibold py-2 px-4 rounded-sm mt-2'>SUBMIT</button>

          </form>
        </div>
       </div>
       <div className='right-div w1/2 pr-2 my-3'>

        <img src={'https://images.pexels.com/photos/7245366/pexels-photo-7245366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='h-full '  alt="img" />
       </div>
      </div>

      {/* <UpperFooter/> */}
      
      </>  
  )
}

export default page