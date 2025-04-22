import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
    const { doctors } = useContext(AppContext)

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Appointments</h2>
            <div className="flex flex-col gap-6">
                {doctors.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
                    >
                        <div className="flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                            />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                            <p className="text-blue-600 font-medium">{item.speciality}</p>
                            <div className="mt-2 text-sm text-gray-600">
                                <p className="font-medium">Address:</p>
                                <p>{item.address.line1}</p>
                                <p>{item.address.line2}</p>
                            </div>
                            <p className="mt-3 text-sm text-gray-700">
                                <span className="font-semibold">Date & Time:</span>{' '}
                                25, July, 2025 | 8:30 PM
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-2 mt-4 sm:mt-0">
                            <button className="w-full sm:w-auto bg-white  border border-gray-400 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition duration-200">
                                Pay Online
                            </button>
                            <button className="w-full sm:w-auto bg-white  border border-gray-400 py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transition duration-200">
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
