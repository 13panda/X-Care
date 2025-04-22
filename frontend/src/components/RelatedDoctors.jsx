import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDocs] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {  // Sửa 'lenght' thành 'length'
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            console.log(doctorsData);  // Kiểm tra kết quả lọc
            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docId])
    
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            {/* Tiêu đề */}
            <h1 className='text-3xl font-semibold text-center'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-gray-500 text-sm'>Simply browse through our extensive list of trusted doctors</p>

            {/* Grid hiển thị doctor */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6 px-4 sm:px-0'>
                {relDoc.length > 0 ? (
                    relDoc.slice(0, 5).map((item, index) => (
                        <div
                            onClick={() => {navigate(`/appointment/${item._id}`) ; scrollTo(0,0)}}
                            key={index}
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white'
                        >
                            <img className='w-full h-56 object-cover bg-blue-50' src={item.image} alt={item.name} />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-green-500 mb-1'>
                                    <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                                    <span>Available</span>
                                </div>
                                <p className='text-gray-900 text-lg font-semibold'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No related doctors available</p>  // Hiển thị thông báo nếu không có bác sĩ
                )}
            </div>

            {/* Nút more */}
            <button
                onClick={() => {
                    navigate('/doctors')
                    scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className='bg-blue-50 text-gray-900 px-10 py-3 rounded-full mt-10 hover:bg-blue-100 transition'>
                View More Doctors
            </button>
        </div>
    )
}

export default RelatedDoctors
