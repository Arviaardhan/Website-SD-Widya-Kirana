import React, { useEffect, useState } from 'react';
import { fetchBeritaTerbaru } from '../controllers/HomeController';
import { imageHome, kepalaSekolah } from '../assets/images';
import { apiUrlImage } from '../utils/Config';
import "@fontsource/montserrat/700.css";

function Home() {
    const [beritaTerbaru, setBeritaTerbaru] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBeritaTerbaru();
            setBeritaTerbaru(data);
        };

        fetchData();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[400px]">
                <img
                    src={imageHome}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#ffff00] mb-12 md:mb-15 drop-shadow-lg">
                        BE BRIGHT GENERATION
                    </h1>
                    <p className="text-lg md:text-xl mx-5 italic drop-shadow font-normal tracking-wide">
                        Jl. Pemuda No.60, Magersari, Panjunan, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59317
                    </p>
                </div>
            </div>

            {/* Section Sambutan */}
            <section className="bg-gray-50 py-12 px-4 md:px-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 h-[300px] md:h-[470px] overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={kepalaSekolah}
                            alt="Kepala Sekolah"
                            className="w-full h-full object-cover object-[center_30%] scale-110 rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl md:leading-[1.2] font-bold text-[#26166e] mb-4">
                            Sambutan Kepala Sekolah
                        </h2>
                        <p className="text-gray-700 text-lg mb-4 text">
                            Kami berkomitmen untuk memberikan pendidikan terbaik bagi anak-anak dengan lingkungan yang nyaman dan inspiratif. Kami berharap setiap langkah yang diambil di sekolah ini menjadi pijakan menuju masa depan yang cerah.
                        </p>
                        <p className="text-gray-700 text-lg mb-4">
                            Terima kasih atas dukungan dan kepercayaan yang diberikan, god bless you.
                        </p>
                        <p className="text-gray-700 text-lg mb-1">Salam, Kepala Sekolah SD Widya Kirana</p>
                        <p className="text-gray-700 text-lg font-semibold">Kepala Sekolah : Priskilla S.E. S.Pd</p>
                    </div>
                </div>
            </section>

            {/* Section Berita */}
            <section className="py-8 px-4 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#26166e] tracking-[1px]">BERITA TERBARU</h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600 font-normal tracking-wide">
                        Simak informasi dan kegiatan terbaru dari SD Widya Kirana
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {beritaTerbaru.map((berita, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={`${apiUrlImage}${berita.image}`}
                                alt={berita.title}
                                className="rounded-md shadow-md mb-4 w-full h-72 object-cover object-center"
                            />
                            <h3 className="font-bold text-lg text-[#FFAF61] mb-2">{berita.title}</h3>
                            <p className="text-gray-700 text-sm leading-6.5 md:leading-[1.55] line-clamp-3 font-normal tracking-wide mx-5">{berita.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;
