import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const {backendUrl, token, setToken} = useContext(AppContext)
    const navigate = useNavigate()

    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        // Xử lý logic ở đây (API call, redirect, v.v.)

        try {

            if (state === 'Sign Up') {
                
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, password, email})
                if (data.success) {
                    localStorage.setItem('token',data.token)
                    setToken(data.token)
                }else{
                    toast.error(data.message)
                }
            }else{

                const {data} = await axios.post(backendUrl + '/api/user/login', {password, email})
                if (data.success) {
                    localStorage.setItem('token',data.token)
                    setToken(data.token)
                }else{
                    toast.error(data.message)
                }
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }

    useEffect(()=>{
        if (token) {
            navigate('/')
        }
    },[token])

    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="flex flex-col gap-4 w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </h2>
                <p className="text-gray-500">
                    Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
                </p>

                {state === 'Sign Up' && (
                    <div>
                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}

                <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-600">Password</label>
                    <input
                        type="password"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark transition text-white w-full py-2 rounded-md text-base font-medium"
                >
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                <p className="text-sm text-gray-500">
                    {state === 'Sign Up' ? (
                        <>
                            Already have an account?{' '}
                            <span
                                onClick={() => setState('Login')}
                                className="text-primary hover:underline cursor-pointer"
                            >
                                Login here
                            </span>
                        </>
                    ) : (
                        <>
                            Don't have an account?{' '}
                            <span
                                onClick={() => setState('Sign Up')}
                                className="text-primary hover:underline cursor-pointer"
                            >
                                Click here
                            </span>
                        </>
                    )}
                </p>
            </div>
        </form>
    )
}

export default Login
