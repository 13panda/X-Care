import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row bg-white rounded-3xl px-6 md:px-12 lg:px-24 overflow-hidden items-center'>
            {/* ---------- Left Image ---------- */}
            <div className='md:w-1/2 flex justify-center items-center mt-0'>
                <img
                    className='w-[320px] md:w-[420px] lg:w-[520px] object-cover rounded-xl'
                    src={assets.header_img}
                    alt="Doctor Illustration"
                />
            </div>

            {/* ---------- Right Content ---------- */}
            <div className='md:w-1/2 flex flex-col justify-center gap-6 py-10 md:py-[8vw]'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight tracking-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </h1>

                <div className='flex items-center gap-4 text-gray-700 text-base font-light'>
                    <img className='w-16 md:w-20' src={assets.group_profiles} alt="Group Profiles" />
                    <p>
                        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                    </p>
                </div>

                <a href="#speciality"
                    className='flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-max self-start'>
                    Book appointment
                    <span className='flex items-center justify-center w-7 h-7 rounded-full '>
                        <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" style={{filter: 'invert(1)'}} />
                    </span>
                </a>

                <blockquote className="text-lg font-semibold text-primary mt-2">
                    "Book Quickly, Consult with Confidence"
                </blockquote>
                <p className="text-gray-700">
                    Trusted doctors. Quality care. Your health matters.
                </p>
            </div>
        </header>
    )
}

export default Header
