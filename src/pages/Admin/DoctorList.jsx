import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorList = () => {
    const { doctors, aToken, getAllDoctors, changeAvailablity} = useContext(AdminContext);

    useEffect(() => {
        if (aToken) {
            getAllDoctors();
        }
    }, [aToken]);

    return (
        <div className="p-4 sm:p-6 lg:p-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 ">
                All Doctors
            </h1>

            {/* Doctor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {doctors.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-100"
                        />
                        <p className="text-xl font-semibold text-center">{item.name}</p>
                        <p className="text-gray-500 text-base text-center">{item.speciality}</p>

                        <div className="flex items-center gap-2 mt-3">
                            <input 
                                onChange={()=>changeAvailablity(item._id)}
                                type="checkbox"
                                checked={item.available}
                                readOnly
                                className="w-4 h-4 rounded-full accent-blue-500 border-2 border-gray-300"
                            />
                            <span className="text-base text-gray-600">Available</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorList;
