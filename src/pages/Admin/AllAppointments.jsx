import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../../../admin/src/assets/assets'

const AllAppointments = () => {
    const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getAllAppointments()
        }
    }, [aToken])

    return (
        <div className='w-full max-w-6xl mx-auto mt-5 px-4'>
            <p className='mb-4 text-xl font-semibold text-gray-800'>All Appointments</p>

            <div className='bg-white border rounded-xl shadow-md text-sm overflow-hidden'>

                {/* Header cố định */}
                <div className='grid grid-cols-[0.5fr_2.5fr_1fr_3fr_3fr_1fr_1fr] items-center py-3 px-6 border-b bg-gray-100 text-gray-700 font-medium sticky top-0 z-10'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Doctor</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>

                {/* Danh sách có scroll riêng */}
                <div className='max-h-[70vh] overflow-y-auto'>
                    {appointments.map((item, index) => (
                        <div
                            key={index}
                            className='grid grid-cols-[0.5fr_2.5fr_1fr_3fr_3fr_1fr_1fr] items-center py-4 px-6 border-b text-gray-700 hover:bg-gray-50 transition-all duration-150'
                        >
                            <p>{index + 1}</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-8 h-8 rounded-full object-cover border' src={item.userData.image} alt="Patient" />
                                <p>{item.userData.name}</p>
                            </div>
                            <p>{calculateAge(item.userData.dob)}</p>
                            <p className='text-gray-600'>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-8 h-8 rounded-full object-cover border bg-gray-200' src={item.docData.image} alt="Doctor" />
                                <p>{item.docData.name}</p>
                            </div>
                            <p className='text-gray-800 font-medium'>{currency} {item.amount}</p>
                            {item.cancelled ? (
                                <p className='text-red-500 text-xs font-semibold'>Cancelled</p>
                            ) : (
                                <img
                                    onClick={() => cancelAppointment(item._id)}
                                    className='w-8 cursor-pointer transition-transform hover:scale-110'
                                    src={assets.cancel_icon}
                                    alt="Cancel"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllAppointments
