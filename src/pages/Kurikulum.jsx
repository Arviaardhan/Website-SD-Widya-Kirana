import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import { partnerSchools } from "../models/kurikulumModel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

function Kurikulum() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>

            <Helmet>
                <meta name="google-site-verification" content="6NySi0eoc_-8ZIzOhmXTUA2e3VTapByqeyCmlLp1V84" />
                <title>Kurikulum | SD Widya Kirana</title>
                <meta name="description" content="Pelajari kurikulum yang diterapkan di SD Widya Kirana, yang menggunakan Kurikulum Oakbridge dan berkualitas bagi siswa. Temukan detail tentang program pembelajaran kami di sini." />
                <meta name="keywords" content="Kurikulum SD Widya Kirana, Pendidikan Dasar, Kurikulum Oakbridge, Sekolah Dasar Kudus, Pembelajaran Berkualitas, Pendidikan Holistik, SD Widya Kirana Kudus" />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]" data-aos="fade-in">
                <img
                    src={imageHome}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        HALAMAN KURIKULUM
                    </h1>
                </div>
            </div>

            {/* Deskripsi Kurikulum */}
            <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 bg-white" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-[#26166e] mb-4">Kurikulum Oakbridge Nasional</h2>
                <p className="text-xl text-gray-700 font-normal tracking-wide leading-relaxed">
                    <b>SD Widya Kirana menerapkan kurikulum OakBridge</b>, <b>Oakbridge adalah</b> sistem pembelajaran yang memberikan solusi dengan menggunakan kurikulum Nasional Plus yang
                    berstandar Nasional dan Internasional. Oakbridge mentransformasi cara belajar yang konvensional menjadi
                    pembelajaran yang berbasis teknologi.
                </p>
            </section>

            {/* Partner School */}
            <section className="px-6 md:px-20 lg:px-40 py-12" data-aos="fade-up">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#26166e] mb-20">
                    Kerja sama SD Widya Kirana
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 px-10 md:px-0 lg:gap-y-20 lg:px-0 text-center">
                    {partnerSchools.map((school, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center"
                        >
                            <img
                                src={school.image}
                                alt={school.title}
                                className="w-full max-w-[320px] h-auto object-contain mb-0"
                            />
                            <h3 className="text-2xl font-semibold">{school.title}</h3>
                            <p className="text-gray-800 text-xl tracking-wide mt-5 font-normal">{school.location}</p>
                        </div>
                    ))}
                </div>

            </section>

            <Footer />
        </div>
    );
}

export default Kurikulum;