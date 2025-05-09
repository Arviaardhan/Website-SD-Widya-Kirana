import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AxiosInstance } from "../common/AxiosInstance";
import Navbar from "../components/Navbar";
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import { getAllNews } from "../utils/Config";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

function Blog() {
    const [newsList, setNewsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    // Fungsi navigasi halaman
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll ke atas
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await AxiosInstance.get(`${getAllNews}`);
                setNewsList(response.data);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setIsLoading(false); // selesai loading
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            AOS.refresh(); // Memanggil ulang AOS untuk animasi pada elemen yang baru dimuat
        }
    }, [newsList, isLoading]);

    const yearList = Array.from(
        new Set(
            newsList.map(news => new Date(news.created_at).getFullYear())
        )
    ).sort((a, b) => b - a);

    // Filtered List
    const filteredNews = newsList.filter((news) => {
        const titleMatch = news.title?.toLowerCase().includes(searchTerm.toLowerCase());
        const contentMatch = news.content?.toLowerCase().includes(searchTerm.toLowerCase());
        const createdAt = new Date(news.created_at);
        const monthMatch = selectedMonth ? createdAt.getMonth() + 1 === parseInt(selectedMonth) : true;
        const yearMatch = selectedYear ? createdAt.getFullYear() === parseInt(selectedYear) : true;

        return (titleMatch || contentMatch) && monthMatch && yearMatch;
    });

    // Hitung total halaman
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

    const paginatedNews = filteredNews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>

            <Helmet>
                <meta name="google-site-verification" content="6NySi0eoc_-8ZIzOhmXTUA2e3VTapByqeyCmlLp1V84" />
                <title>Blog | SD Widya Kirana</title>
                <meta name="description" content="Baca berbagai artikel dan informasi menarik seputar kegiatan, prestasi, coding, serta perkembangan terbaru di SD Widya Kirana. Dapatkan update seputar dunia pendidikan dan kegiatan sekolah kami." />
                <meta name="keywords" content="Blog SD Widya Kirana, Artikel Pendidikan, Berita Sekolah Dasar Kudus, Kegiatan Sekolah, Informasi Pendidikan, SD Widya Kirana Kudus" />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]" data-aos="fade-in">
                <img
                    src={imageHome}
                    alt="Blog"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">BLOG</h1>
                </div>
            </div>

            {/* List Blog */}
            <div className="max-w-6xl mx-auto px-4 py-10" data-aos="fade-up">
                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Cari berita..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFAF61]"
                    />

                    <div className="flex gap-6 w-full md:w-auto items-center justify-center">
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className="px-4 pr-8 py-2 border rounded-full shadow-sm w-full"
                        >
                            <option value="">Pilih Bulan</option>
                            {[
                                "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
                            ].map((bulan, index) => (
                                <option key={index} value={index + 1}>{bulan}</option>
                            ))}
                        </select>

                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 pr-8 py-2 border rounded-full shadow-sm w-full"
                        >
                            <option value="">Pilih Tahun</option>
                            {yearList.map((tahun) => (
                                <option key={tahun} value={tahun}>{tahun}</option>
                            ))}
                        </select>

                    </div>
                </div>

                {/* News Cards */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-60">
                        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#FFAF61]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {paginatedNews.map((news, index) => (
                            <Link
                                to={`/news/${news.id}`}
                                key={index}
                                className="bg-white rounded-xl transition overflow-hidden"
                                data-aos="fade-up"
                            >
                                <img
                                    src={
                                        news.image
                                            ? news.image
                                            : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                                    }
                                    alt={news.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                                    }}
                                    className="w-full max-h-max object-cover rounded-md"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold mb-5 mt-5 text-[#FFAF61]">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 text-md mb-5 mt-5 line-clamp-2">
                                        {news.content}
                                    </p>
                                    <div className="text-md text-gray-500 flex items-center justify-between">
                                        <span>By {news.admin?.username || "Admin"}</span>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/128/591/591576.png"
                                                alt="calendar"
                                                className="w-4 h-4"
                                            />
                                            <span>
                                                {new Date(news.created_at).toLocaleDateString("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {filteredNews.length === 0 && (
                            <p className="text-center col-span-full text-gray-500">Tidak ada berita yang sesuai.</p>
                        )}
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="mt-10 flex justify-center items-center gap-2">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-full border ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-white text-black hover:bg-gray-100'
                            }`}
                    >
                        Sebelumnya
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 rounded-full border ${currentPage === index + 1
                                ? 'bg-[#FFAF61] text-white'
                                : 'bg-white hover:bg-gray-100'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-full border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-white text-black hover:bg-gray-100'
                            }`}
                    >
                        Berikutnya
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Blog;
