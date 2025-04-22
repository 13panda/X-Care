import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row bg-primary rounded-3xl px-6 md:px-12 lg:px-24 overflow-hidden shadow-lg'>
            
            {/* ---------- Left Content ---------- */}
            <div className='md:w-1/2 flex flex-col justify-center gap-6 py-10 md:py-[8vw]'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </h1>

                <div className='flex flex-col md:flex-row items-center gap-4 text-white text-base font-light'>
                    <img className='w-24 md:w-28' src={assets.group_profiles} alt="Group Profiles" />
                    <p className='text-center md:text-left'>
                        Easily browse a wide range of specialists and schedule <br className='hidden sm:inline' /> appointments without any hassle.
                    </p>
                </div>

                <a href="#speciality"
                    className='flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-max self-center md:self-start'>
                    Book Appointment
                    <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
                </a>
            </div>

            {/* ---------- Right Image ---------- */}
            <div className='md:w-1/2 relative flex justify-center items-end mt-8 md:mt-0'>
                <img
                    className='w-full md:max-w-[90%] lg:max-w-[80%] object-cover rounded-xl drop-shadow-xl'
                    src={assets.header_img}
                    alt="Doctor Illustration"
                />
            </div>

        </header>
    )
}

export default Header
