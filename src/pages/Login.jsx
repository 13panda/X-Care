import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)
    const navigate = useNavigate() // Sử dụng useNavigate

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })

                if (data.success) {
                    localStorage.setItem('aToken', data.token);
                    setAToken(data.token);
                    toast.success('Login successful! Welcome Admin.');
                    navigate('/admin-dashboard');
                } else {
                    toast.error(data.message)
                }
            } else {
                // Doctor Login Logic
                const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })

                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                    // Hiển thị thông báo thành công
                    toast.success('Login successful! Welcome Doctor.')
                } else {
                    toast.error(data.message)
                }
            }

        } catch (error) {
            console.error('Login error:', error)
            toast.error('Login failed. Please try again later.')
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center bg-gradient-to-r from-blue-400 to-purple-600'>
            <div className='flex flex-col gap-6 m-auto items-center p-10 bg-white shadow-lg rounded-xl w-full sm:w-96'>
                <p className='text-3xl font-semibold text-gray-800 mb-6'>
                    <span className='text-primary'>{state}</span> Login
                </p>

                {/* Email */}
                <div className='w-full'>
                    <p className='text-gray-600'>Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='border border-[#DADADA] rounded-xl w-full p-3 mt-1 focus:ring-2 focus:ring-primary'
                        type='email'
                        placeholder='Enter your email'
                        required
                    />
                </div>

                {/* Password */}
                <div className='w-full'>
                    <p className='text-gray-600'>Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='border border-[#DADADA] rounded-xl w-full p-3 mt-1 focus:ring-2 focus:ring-primary'
                        type='password'
                        placeholder='Enter your password'
                        required
                    />
                </div>

                <button className='bg-primary text-white w-full py-3 rounded-md text-lg transition-all transform hover:scale-105'>
                    Login
                </button>

                {/* Switch between Admin and Doctor login */}
                {
                    state === 'Admin'
                        ? <p className='text-center text-sm text-gray-600 mt-4'>Doctor Login?
                            <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}> Click here</span>
                        </p>
                        : <p className='text-center text-sm text-gray-600 mt-4'>Admin Login?
                            <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}> Click here</span>
                        </p>
                }
            </div>
        </form>
    )
}

export default Login
