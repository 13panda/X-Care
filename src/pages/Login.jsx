import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Login = () => {

    const [state,setState] = useState('Admin')



    return (
        <form>
            <div>
                <p>
                    <span>{state}</span> Login
                    <div>
                        <p>Email</p>
                        <input type='email' required />
                    </div>
                </p>
            </div>
        </form>
    )
}

export default Login
