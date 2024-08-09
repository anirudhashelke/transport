import React from 'react'
import './Track.css'
const Track = () => {
    return (
        <div className='a_track'>
            <div className='a_track_box flex align-items-center'>
                <div className="container">
                        <div className=" text-white">
                            <h1 className='a-700 text-[32px]'>Track Your Shipment</h1>
                            <p className='text-[14px] py-4'>Iste reprehenderit maiores facilis saepe cumque molestias. Labore
                                iusto excepturi, <br /> laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic
                                error <br /> porro.Deserunt officia unde repellat beatae ipsum sed. Aperiam tempora <br />
                                consectetur voluptas magnam maxime asperiores quas
                                similique repudiandae, <br /> veritatis reiciendis harum fuga atque.</p>
                            <div className=' a_track_input'>
                                <input type="text" placeholder='Enter Your Tracking Number' className='pe-[150px] ps-2 py-[9px]' />
                                <button className='text-[17px] py-[9px] a-400 bg-[#0a97b0] hover:bg-[#065968] px-[80px] '>Track</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track