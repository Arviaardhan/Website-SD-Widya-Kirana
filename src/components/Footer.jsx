import React from "react";
import { LogoSD } from '../assets/images';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B1170] text-white px-6 md:px-10 py-10">
      
      {/* Wrapper tengah */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-12 md:gap-22 lg:gap-42 w-full max-w-7xl">

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-start md:justify-start">
            <img
              src={LogoSD}
              alt="Logo SD Widya Kirana"
              className="w-36 h-36 object-contain"
            />
          </div>

          {/* Info + Sosmed */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-10 text-sm">

            {/* Info SD */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">SD Widya Kirana</h2>
              <p className="mb-4 font-normal tracking-wide">Be Bright Generation</p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1" />
                  <span>
                    Jl. Pemuda No.60, Magersari, Panjunan, Kota Kudus, <br />
                    Jawa Tengah 59317
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>(0291) 437929</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <a href="mailto:sdwidyakirana@gmail.com" className="underline">
                    sdwidyakirana@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Social Media</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaInstagram /> <a href="https://www.instagram.com/sdwidyakiranakudus/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaFacebook /> <a href="https://www.facebook.com/ONPKudus" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaYoutube /> <a href="https://www.youtube.com/@sdwidyakiranakudus2486/" target="_blank" rel="noopener noreferrer" className="hover:underline">Youtube</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTiktok /> <a href="#" className="hover:underline">Tiktok</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-500" />

      <div className="text-center text-sm text-gray-300">
        © Copyright 2025 – SD Widya Kirana All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
