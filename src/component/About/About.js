import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='container '>
            <div className="row my-[150px]">
                <div className='col-12 col-md-6'>
                    <div>
                        <h1 className='text-[#0c0c0c] text-[32px] a-700'>About <span className='text-[#0A97B0]'>Us</span></h1>
                        <p className='py-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationin some
                            form, by injected humour, or randomised words which don't look even
                            slightly believable. If youare going to use a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden inthe middle of text. All</p>
                        <button className='bg-[#0a97b0] px-[37px] py-[10px] a-400 text-[#fff] hover:bg-[#065968] mb-5'>Read More</button>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='bg-[#04233B] a_about_top h-[260px] relative'>
                        <div className='mx-4 a_about'><img src="about-img.jpg" alt="#" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About