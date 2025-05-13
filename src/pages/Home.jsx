import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBeritaTerbaru, fetchGaleri } from '../controllers/HomeController';
import { imageHome, kepalaSekolah } from '../assets/images';
import { MdKeyboardArrowRight } from "react-icons/md";
import "@fontsource/montserrat/700.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

function Home() {
    const [beritaTerbaru, setBeritaTerbaru] = useState([]);
    const [galleryImages, setGaleriImages] = useState([]);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        const fetchData = async () => {
            const berita = await fetchBeritaTerbaru();
            setBeritaTerbaru(berita);

            const galeri = await fetchGaleri();
            setGaleriImages(galeri);
        };

        fetchData();
    }, []);

    return (
        <>

            <Helmet>
                <meta name="google-site-verification" content="6NySi0eoc_-8ZIzOhmXTUA2e3VTapByqeyCmlLp1V84" />
                <title>Beranda | SD Widya Kirana</title>
                <meta name="description" content="Selamat datang di website resmi SD Widya Kirana. Temukan berita terbaru, galeri kegiatan, dan informasi penting lainnya di sini." />
                <meta name="keywords" content="SD Widya Kirana, Sekolah Dasar Kudus, Pendidikan, Sekolah Coding" />
            </Helmet>

            <Navbar />
            {/* Hero Section */}
            {/* Redesigned Hero Section */}
            <div className="relative w-full h-[500px] md:h-[600px] bg-black">
                <img
                    src={imageHome}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 z-10" />

                <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wider">
                        <span className="text-yellow-400">BE BRIGHT GENERATION</span>
                    </h1>

                    <p className="mt-4 text-xl md:text-2xl italic text-gray-200 font-medium tracking-wide">
                        (Brilliant, Religious, Independent, Great, Hope, Talented)
                    </p>

                    <div className="mt-6 border-t border-white/20 w-3/4 md:w-1/2" />

                    <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-xl leading-relaxed">
                        Jl. Pemuda No.60, Magersari, Panjunan, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59317
                    </p>
                </div>
            </div>


            {/* Section Sambutan */}
            <section className="py-16 px-4 md:px-10 bg-white" data-aos="fade-up">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                    {/* Gambar Kepala Sekolah */}
                    <div className="w-full md:w-1/2 h-[320px] md:h-[480px] overflow-hidden rounded-2xl shadow-xl">
                        <img
                            loading="lazy"
                            src={kepalaSekolah}
                            alt="Kepala Sekolah"
                            className="w-full h-full object-cover object-[center_30%] scale-105 transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    {/* Konten Sambutan */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#26166e] mb-6 leading-snug">
                            Sambutan Kepala Sekolah
                        </h2>
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                            Kami berkomitmen untuk memberikan pendidikan terbaik bagi anak-anak dengan lingkungan yang nyaman dan inspiratif. Kami berharap setiap langkah yang diambil di sekolah ini menjadi pijakan menuju masa depan yang cerah.
                        </p>
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                            Terima kasih atas dukungan dan kepercayaan yang diberikan, God bless you.
                        </p>
                        <p className="text-gray-800 text-lg mb-1">
                            Salam, Kepala Sekolah SD Widya Kirana
                        </p>
                        <p className="text-[#26166e] text-lg font-semibold">
                            Priskilla S.E. S.Pd
                        </p>
                    </div>

                </div>
            </section>

            {/* Section Berita */}
            <section className="py-14 px-4 md:px-20 bg-white justify-center items-center" data-aos="fade-up">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#26166e] leading-snug antialiased">BERITA TERBARU</h2>
                    <p className="mt-2 text-sm md:text-xl lg:text-[1.rem] text-gray-600 font-normal tracking-wide">
                        Simak informasi dan kegiatan terbaru dari SD Widya Kirana
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {beritaTerbaru.length === 0 ? (
                        Array(4).fill().map((_, i) => (
                            <div key={i} className="text-center">
                                <Skeleton height={288} className="mb-4 rounded-md" />
                                <Skeleton height={24} width={`80%`} className="mx-auto mb-2" />
                                <Skeleton count={3} height={14} width={`90%`} className="mx-auto mb-1" />
                            </div>
                        ))
                    ) : (
                        beritaTerbaru.map((berita, index) => (
                            <Link
                                to={`/news/${berita.id}`}
                                key={index}
                                className="flex flex-col bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                                data-aos="fade-up"
                            >
                                {/* Gambar Berita */}
                                <img
                                    loading="lazy"
                                    src={berita.image}
                                    alt={berita.title}
                                    className="w-full h-full object-cover rounded-xl shadow-sm"
                                />

                                {/* Konten Berita */}
                                <div className="flex-1 mt-4">
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">{berita.title}</h3>

                                    {berita?.content && (
                                        <p
                                            className="text-gray-700 text-sm text-justify tracking-wide leading-relaxed line-clamp-2 mb-8"
                                            dangerouslySetInnerHTML={{ __html: berita.content }}
                                        />
                                    )}

                                    {berita?.created_at && (
                                        <div className="flex justify-between items-center">
                                            <div className="bg-yellow-500 px-3 py-1 rounded-2xl text-white text-md font-medium">
                                                {new Date(berita.created_at).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </div>

                                            <div className="bg-indigo-900 text-white p-2 rounded-full cursor-pointer">
                                                <MdKeyboardArrowRight />
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </section>

            {/* Section Gallery */}
            <section className="py-10 px-10 md:px-40" data-aos="fade-up">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#26166e] leading-snug">Galeri SD Widya Kirana</h2>
                    <p className="mt-2 md:mt-4 lg:mt-5 text-sm md:text-xl lg:text-[1.rem] text-gray-600 font-normal tracking-wide">
                        Dokumentasi kegiatan dan momen istimewa di SD Widya Kirana
                    </p>
                </div>

                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: { slidesToShow: 2 }
                        },
                        {
                            breakpoint: 640,
                            settings: { slidesToShow: 1 }
                        }
                    ]}
                >
                    {galleryImages.length === 0 ? (
                        Array(2).fill().map((_, i) => (
                            <div className="px-4" key={i}>
                                <Skeleton
                                    height={320}
                                    className="rounded-lg"
                                    containerClassName="w-full h-[200px] sm:h-[180px] md:h-[180px] lg:h-[520px] mx-auto"
                                />
                            </div>
                        ))
                    ) : (
                        galleryImages.map((item, index) => (
                            <div className="px-4" key={index}>
                                <div className="overflow-hidden rounded-lg shadow-md 
                            w-full h-[200px] 
                            sm:w-full sm:h-[180px] 
                            md:w-full md:h-[180px] 
                            lg:w-[920px] lg:h-[520px] 
                            mx-auto">
                                    <img
                                        loading='lazy'
                                        src={`${item.image}`}
                                        alt={`Gallery`}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </Slider>
            </section>

            {/* Section Lokasi */}
            <section className="py-12 px-4 md:px-20" data-aos="fade-up">
                <div className="max-w-7xl mx-auto text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#26166e] leading-snug mb-4">Lokasi SD Widya Kirana</h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Kunjungi kami di alamat berikut atau lihat lokasi melalui Google Maps:
                    </p>
                </div>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between bg-white p-6 rounded-lg shadow-lg">
                    {/* Iframe Maps */}
                    <div className="w-full md:w-2/3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6747323299187!2d110.84133971089656!3d-6.809361966573202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c5c69291c315%3A0xe8e32db23bea6388!2sSD%20Widya%20Kirana!5e0!3m2!1sen!2sid!4v1743931965810!5m2!1sen!2sid"
                            width="100%"
                            height="380"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>

                    {/* Alamat Sekolah */}
                    <div className="w-full md:w-1/3 text-gray-700">
                        <h3 className="text-2xl font-semibold mb-8 text-[#26166e]">Alamat Sekolah</h3>
                        <p className="text-md leading-relaxed mr-15">
                            Jl. Pemuda No.60, Magersari, Panjunan, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59312
                        </p>

                        <div className="mt-4">
                            <a
                                href="https://maps.app.goo.gl/3WLCZ4Tb38auBGYm7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Buka di Google Maps →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;