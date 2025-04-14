import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { imageHome } from '../assets/images';
import axios from "axios";
import Footer from "../components/Footer";
import { apiUrl, apiUrlImage, getAllTeacherStaff } from '../utils/Config'; // pastikan path benar

function GuruStaff() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get(`${apiUrl}${getAllTeacherStaff}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "ngrok-skip-browser-warning": "true",
                    },
                });
                setTeachers(response.data); // sesuaikan dengan struktur data
            } catch (error) {
                console.error("Error fetching teachers:", error);
            }
        };

        fetchTeachers();
    }, []);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]">
                <img
                    src={imageHome}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        HALAMAN GURU & STAFF
                    </h1>
                </div>
            </div>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teachers.map((teacher, index) => (
                        <div key={index} className="text-center">
                            <div className="h-90 w-full overflow-hidden rounded-xl shadow-lg mb-4">
                                <img
                                    loading='lazy'
                                    src={`${teacher.image}`}
                                    alt={teacher.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-indigo-900">
                                {teacher.name}
                            </h3>
                            <p className="text-gray-600 mt-5">{teacher.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default GuruStaff;
