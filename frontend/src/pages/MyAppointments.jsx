import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointments = () => {
    const { backendUrl, token, getDoctorsData } = useContext(AppContext)

    const [appointments, setAppointments] = useState([])
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/cancel-appointment',
                { appointmentId },
                { headers: { token } }
            )
            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
                getDoctorsData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Appointments</h2>
            <div className="flex flex-col gap-6">
                {appointments.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
                    >
                        <div className="flex-shrink-0">
                            <img
                                src={item.docData.image}
                                alt={item.docData.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                            />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900">{item.docData.name}</h3>
                            <p className="text-blue-600 font-medium">{item.docData.speciality}</p>
                            <div className="mt-2 text-sm text-gray-600">
                                <p className="font-medium">Address:</p>
                                <p>{item.docData.address.line1}</p>
                                <p>{item.docData.address.line2}</p>
                            </div>
                            <p className="mt-3 text-sm text-gray-700">
                                <span className="font-semibold">Date & Time:</span>{' '}
                                {slotDateFormat(item.slotDate)} || {item.slotTime}
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-2 mt-4 sm:mt-0">
                            {!item.cancelled && <button
                                className="w-full sm:w-auto bg-white border border-gray-400 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition duration-300">
                                Pay Online
                            </button>}
                            {!item.cancelled && <button
                                onClick={() => cancelAppointment(item._id)}
                                className="w-full sm:w-auto bg-white border border-gray-400 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
                                Cancel Appointment
                            </button>}
                            {item.cancelled && <button className='sm:min-w-48 py-2 border rounded text-red-500'>Appointment cancelled</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
