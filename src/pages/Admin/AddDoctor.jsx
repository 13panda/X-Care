import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {

            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData()

            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            //console log formdata
            formData.forEach((value, key) => {
                console.log(`${key}:${value}`)
            })

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

            if(data.success){
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setAbout('')
                setDegree('')
                setFees('')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>

            <p className='mb-3 text-xl font-semibold text-gray-800'>Add Doctor</p>

            <div className='bg-white px-8 py-8 border rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-scroll shadow-md'>
                <div className='flex items-center gap-4 mb-8 text-gray-600'>
                    <label htmlFor="doc-img" className="cursor-pointer">
                        <img className='w-16 h-16 object-cover bg-gray-100 rounded-full' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="preview" />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p className='text-sm text-gray-500'>Upload doctor picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p>Doctor Name</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} className='p-2 border rounded-md shadow-sm focus:outline-primary' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Doctor Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='p-2 border rounded-md shadow-sm focus:outline-primary' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Doctor Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='p-2 border rounded-md shadow-sm focus:outline-primary' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Experience</p>
                            <select onChange={(e) => setExperience(e.target.value)} value={experience} className='p-2 border rounded-md shadow-sm' required>
                                {
                                    Array.from({ length: 10 }, (_, i) => (
                                        <option key={i} value={`${i + 1} Year`}>{i + 1} Year</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={(e) => setFees(e.target.value)} value={fees} className='p-2 border rounded-md shadow-sm' type="number" placeholder='Fees' required />
                        </div>
                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p>Speciality</p>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='p-2 border rounded-md shadow-sm' required>
                                <option value="Generalphysician">General Physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Education</p>
                            <input onChange={(e) => setDegree(e.target.value)} value={degree} className='p-2 border rounded-md shadow-sm' type="text" placeholder='Education' required />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p>Address</p>
                            <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='p-2 border rounded-md shadow-sm' type="text" placeholder='Address 1' required />
                            <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='p-2 border rounded-md shadow-sm mt-1' type="text" placeholder='Address 2' required />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-1 mt-6'>
                    <p>About Doctor</p>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='p-2 border rounded-md shadow-sm' placeholder='Write about doctor' rows={5} required />
                </div>

                <button type='submit' className='mt-6 bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'>
                    Add Doctor
                </button>
            </div>
        </form>
    )
}

export default AddDoctor
