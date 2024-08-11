import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  const data = [
    {
    },
    {
    },
    {
    },
  ]
  return (
    <section className='a_banner mt-[150px] home'>
      <div className='a_banner_box'>
        <Carousel showArrows={false} showStatus={false}  >
          {data.map((index) => {
            return <div key={index} className='container text-start'>
              <div className="row pb-5">
                <div className='text-[#fff]'>
                  <h1 className='text-[40px] a-700'>WE PROVIDE BEST <br />
                    TRANSPORT SERVICE</h1>
                  <p className='text-[#fefefe] text-[14px] a-400 py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia <br /> architecto tenetur debitis hic aspernatur
                    libero commodi atque fugit adipisci, blanditiis quidem <br /> dolorum odi
                    t voluptas? Voluptate, eveniet?</p>
                  <button className='bg-[#0a97b0] px-[37px] py-[10px] a-400 text-[#fff] hover:bg-[#065968] mb-5'>Get A Quote</button>
                </div>


              </div>
            </div>
          })}
        </Carousel>

      </div>
    </section>
  )
}

export default Banner