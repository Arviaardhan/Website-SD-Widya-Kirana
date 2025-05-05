import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisiMisi = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    
    return (
        <>
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
                        HALAMAN VISI MISI
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-2xl md:max-w-3xl lg:max-w-7xl mx-auto px-8 py-10 space-y-10 justify-start items-start">
                
                {/* Pengenalan */}
                <div data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#26166e] mb-5">Pengenalan SD Widya Kirana</h2>
                    <p className="max-w-7xl mx-auto text-gray-700 leading-relaxed font-normal tracking-wide text-xl">
                        SD Widya Kirana adalah sebuah sekolah swasta yang berlokasi di Jl. Pemuda No 60, Panjunan, Kecamatan Kota Kudus, Kabupaten Kudus, Jawa Tengah, telah berdiri sejak tahun 2020. Berfokus pada pendidikan dasar, SD WIDYA KIRANA berkomitmen untuk memberikan pendidikan berkualitas bagi para siswanya. Sekolah ini memiliki visi dan misi yang jelas untuk melahirkan generasi muda yang berakhlak mulia dan cerdas. Dengan mengusung semangat "Unggul dalam Prestasi, Berakhlak Mulia", SD Widya Kirana mendorong siswa-siswinya untuk mencapai prestasi optimal, baik akademik maupun non-akademik. 
                    </p>
                </div>

                {/* Visi */}
                <div data-aos="fade-right">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#26166e] mb-5">Visi SD Widya Kirana</h2>
                    <p className="text-gray-700 leading-relaxed font-normal tracking-wide text-xl">
                        Membangun generasi yang unggul, berdampak dalam iman, ilmu , teknologi dan berintegritas
                    </p>
                </div>

                {/* Misi */}
                <div data-aos="fade-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#26166e] mb-5">Misi SD Widya Kirana</h2>
                    <ol className="list-decimal list-outside pl-6 text-gray-700 space-y-2 leading-relaxed">
                        <li className="text-gray-700 leading-relaxed font-normal tracking-wide text-xl">Menyelenggarakan pendidikan dan pembelajaran yang bermutu, holistik, dan menyenangkan sesuai keunikan peserta didik.</li>
                        <li className="text-gray-700 leading-relaxed font-normal tracking-wide text-xl">Membangun kualitas peserta didik melalui motivasi dan pendidikan karakter.</li>
                        <li className="text-gray-700 leading-relaxed font-normal tracking-wide text-xl">Meningkatkan mutu lulusan yang unggul dan mampu bersaing melalui pendidikan berkualitas.</li>
                        <li className="text-gray-700 leading-relaxed font-normal tracking-wide text-xl">Mengembangkan minat, bakat, dan potensi peserta didik melalui kurikulum yang berorientasi pada keterampilan hidup dan teknologi.</li>
                    </ol>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default VisiMisi;
