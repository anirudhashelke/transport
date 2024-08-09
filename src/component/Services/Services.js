import React from 'react'
const Services = () => {
  const serData=[
    {
      imgpath:"service/s1.png",
      title:"AIR TRANSPORT"
    },
    {
      imgpath:"service/s2.png",
      title:"CARGO TRANSPORT"
    },
    {
      imgpath:"service/s3.png",
      title:"TRUCKS TRANSPORT"
    },
    {
      imgpath:"service/s4.png",
      title:"TRAIN TRANSPORT"
    },
  ]
  return (
    <div className='container my-[80px]'>
        <h1 className='text-[#0c0c0c] text-[32px] a-700'>Our <span  className='text-[#0A97B0]'>Services</span></h1>
        <p className='a-400 text-[#0C0C0C] py-2'>There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration</p>
         <div className="row">
          {serData.map(({imgpath,title},index)=>{
            return  <div key={index} className='col-12 col-md-6'>
            <div className=' text-[#0C0C0C] mt-[40px] bg-[#F8F8F9]  p-[22px] rounded-[4px] flex gap-4'>
              <div><img  className='w-[70px] a_service  ' src={imgpath} alt="#" /></div>
              <div>
            <h4 className='text-[20px] a-700'>{title}</h4>
            <p className='py-3'>fact that a reader will be distracted by the readable <br /> content of a page 
              when looking at its layout.Thepoint of <br /> using</p>

              <h6 className='hover:text-[#0A97B0] text-[ #04233b] a-600'>Read More</h6> 
              </div>
              </div>
          </div>
          })}
           
         </div>
    </div>
  )
}

export default Services