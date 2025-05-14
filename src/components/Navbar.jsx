import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { aToken, setAToken } = useContext(AdminContext)
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

    const handleLogoClick = () => {
        navigate('/admin-dashboard')
        window.location.reload() // Tải lại toàn bộ trang
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            {/* BÊN TRÁI: Logo + X-Care (click để reload và về Dashboard) */}
            <div
                className='flex items-center gap-2 cursor-pointer'
                onClick={handleLogoClick}
                title="Go to Dashboard"
            >
                <img
                    src={assets.admin_logo}
                    alt="X-Care Logo"
                    className='h-14 w-auto object-contain'
                    style={{ maxHeight: '56px' }}
                />
                <span className='text-2xl font-bold text-primary'>X-Care</span>
            </div>

            {/* BÊN PHẢI: Vai trò + Logout */}
            <div className='flex items-center gap-4'>
                <p className='border px-3 py-1 rounded-full border-gray-500 text-gray-600 text-sm'>
                    {aToken ? 'Admin' : 'Doctor'}
                </p>
                <button
                    onClick={logout}
                    className='bg-primary text-white text-sm px-10 py-2 rounded-full'>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar
