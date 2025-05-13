import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosInstance } from "../common/AxiosInstance";
import Navbar from "../components/Navbar";
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import { getNewsByID, getAllNews } from "../utils/Config";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    const fetchDetail = async () => {
      try {
        const res = await AxiosInstance.get(`${getNewsByID}${id}`);
        setNews(res.data);
      } catch (err) {
        console.error("Error fetching detail:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchOtherNews = async () => {
      try {
        const res = await AxiosInstance.get(`${getAllNews}`);
        const filtered = res.data.filter(item => item.id.toString() !== id);
        setNewsList(filtered.slice(0, 4)); // ambil 4 berita
      } catch (err) {
        console.error("Error fetching other news:", err);
      }
    };

    fetchDetail();
    fetchOtherNews();
  }, [id]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#FFAF61]"></div>
    </div>;
  }

  if (!news) {
    return <div className="text-center mt-10 text-red-500">Berita tidak ditemukan</div>;
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[200px]" data-aos="fade-in">
        <img
          src={imageHome}
          alt="Blog Detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">BLOG DETAIL</h1>
        </div>
      </div>

      {/* Konten Berita */}
      <div className="max-w-7xl mx-auto p-4 mt-10 mb-20 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-20" data-aos="fade-up">
        {/* Kolom Kiri: Detail Berita */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4 text-[#6F5D00] leading-snug">
            {news.title}
          </h1>

          <div className="flex gap-15 text-gray-600 mb-6">
            <div className="flex items-center gap-5">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                alt="User Icon"
                className="w-7 h-7 mt-1"
              />
              <div>
                <p className="text-gray-400 text-sm">Diposting oleh</p>
                <p className="text-gray-800 font-semibold text-base">
                  {news.admin?.username || "Admin"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10741/10741253.png"
                alt="User Icon"
                className="w-7 h-7 mt-1"
              />
              <div>
                <p className="text-gray-400 text-sm">Tanggal</p>
                <p className="text-gray-800 font-semibold text-base">
                  {new Date(news.created_at).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>


          <img
            src={
              news.image
                ? news.image
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt={news.title}
            className="w-full max-h-full object-cover rounded-md mb-6"
          />

          <div
            className="text-md text-gray-800 leading-relaxed whitespace-pre-line [&_a]:text-blue-600 [&_a]:underline"
            dangerouslySetInnerHTML={{
              __html: news.content.replace(/<a /g, '<a target="_blank" ')
            }}
          ></div>
        </div>

        {/* Kolom Kanan: Berita Lainnya */}
        <div className="hidden lg:block space-y-10">
          <h2 className="text-xl font-semibold text-[#6F5D00]">Postingan Lainnya</h2>
          {newsList.map((item) => (
            <Link to={`/news/${item.id}`} key={item.id} className="flex gap-4 cursor-pointer">
              <img
                src={item.image || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                alt={item.title}
                className="w-24 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-medium text-lg text-[#FFAF61] hover:text-[#DDA853]">{item.title}</h3>
                <div className="text-sm text-gray-500 mt-1 line-clamp-1 whitespace-pre-line [&_a]:text-blue-600 [&_a]:underline"
                  dangerouslySetInnerHTML={{
                    __html: item.content.replace(/<a /g, '<a target="_blank" ')
                  }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Slider Berita Lainnya: Hanya untuk Mobile & Tablet */}
      <div className="block lg:hidden mt-10 mb-20 px-4 mx-auto overflow-hidden pb-6">
        <h2 className="text-xl font-semibold text-[#6F5D00] mb-4">Postingan Lainnya</h2>
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={true}
          responsive={[
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {newsList.map((item) => (
            <div key={item.id} className="px-2">
              <Link to={`/news/${item.id}`} className="p-3 h-full focus:outline-none active:outline-none">
                <img
                  src={item.image || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="font-semibold text-md text-[#FFAF61] mt-2">{item.title}</h3>
                {item?.content && (
                  <p
                    className="text-sm text-gray-500 mt-1 line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                )}
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </>
  );
}

export default NewsDetail;
