import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";

export default function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="getir"
          />
        </div>
      </Slider>
      <div className="container flex justify-between place-items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className="flex flex-col gap-y-8">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir_logo"
          />
          <h3 className="text-4x1 mt-8 font-semibold text-white">
            Dakikalar Icinde <br /> Kapinizda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giris Yap veya Kayit Ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-text">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none text-sm peer pt-2"
                  type="text"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarasi
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold hover:bg-primary-brand-color hover:text-brand-yellow ">
              Telefon numarasi ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="px-4 bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 h-12 flex items-center rounded-md w-full text-sm font-semibold hover:bg-blue-700 hover:text-white ">
              <FaFacebook size={24} />{" "}
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
