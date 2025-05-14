import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
    const { aToken } = useContext(AdminContext)

    return (
        <div className='min-h-screen bg-white border-r'>
            {
                aToken && <ul className='text-[#333] mt-6'>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-4 py-3.5 px-8 md:min-w-72 transition-colors duration-200 
                            ${isActive ? 'bg-[#EEF0FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-100 hover:scale-105 transition-transform duration-200'}`
                        }
                        to={'/admin-dashboard'}
                    >
                        <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
                        <p className='text-sm'>Dashboard</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-4 py-3.5 px-8 md:min-w-72 transition-colors duration-200 
                            ${isActive ? 'bg-[#EEF0FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-100 hover:scale-105 transition-transform duration-200'}`
                        }
                        to={'/all-appointments'}
                    >
                        <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
                        <p className='text-sm'>Appointments</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-4 py-3.5 px-8 md:min-w-72 transition-colors duration-200 
                            ${isActive ? 'bg-[#EEF0FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-100 hover:scale-105 transition-transform duration-200'}`
                        }
                        to={'/add-doctor'}
                    >
                        <img src={assets.add_icon} alt="Add Doctor" className="w-5 h-5" />
                        <p className='text-sm'>Add Doctor</p>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-4 py-3.5 px-8 md:min-w-72 transition-colors duration-200 
                            ${isActive ? 'bg-[#EEF0FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-100 hover:scale-105 transition-transform duration-200'}`
                        }
                        to={'/doctor-list'}
                    >
                        <img src={assets.people_icon} alt="Doctors List" className="w-5 h-5" />
                        <p className='text-sm'>Doctors List</p>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-4 py-3.5 px-8 md:min-w-72 transition-colors duration-200 
                            ${isActive ? 'bg-[#EEF0FF] border-r-4 border-primary text-primary font-medium' : 'hover:bg-gray-100 hover:scale-105 transition-transform duration-200'}`
                        }
                        to={'/calendar-doctors'}
                    >
                        <img src={assets.people_icon} alt="Doctors List" className="w-5 h-5" />
                        <p className='text-sm'>Calendar Doctors</p>
                    </NavLink>
                </ul>
            }
        </div>
    )
}

export default Sidebar
