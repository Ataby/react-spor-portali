import React from "react";
import Logo from "../photos/shopping/AlışverişSayfası_Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import basket from "../photos/homePage/AnaEkran_Basket3d.png";
import kredi from "../photos/homePage/AnaEkran_KrediSembolü.png";
import abdFutbol from "../photos/homePage/AnaEkran_AmerikaFutbolcusu.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-between">
        <div className=" w-1/2   ">
          <div className="text-center   mt-12  ">
            <p className=" font-semibold text-8xl italic">Spor</p>
            <h1 className=" font-semibold text-8xl italic text-blue-900">
              Portalı
            </h1>
          </div>

          <div className="text-center   mt-24">
            <p className="text-2xl italic font-serif">
              Spor ile ilgili her aradığınız bilgiler bu sayfada.
            </p>
            <div className="flex-row mt-6 ">
              <button className="px-5 py-3 mr-3 text-white rounded-xl italic bg-blue-900">
                İletişim
              </button>
              <button
                style={{ boxShadow: "1px 3px 15px" }}
                className="px-5 py-2 border-2 text-blue-900 font-medium italic  border-black rounded-xl"
              >
                Detaylı Bilgi Al
              </button>
            </div>
          </div>
        </div>

        <div className=" rounded-t-full bg-purple-900">
          <img src={basket} className="" />
        </div>
      </div>

      <div className=" h-1/2 flex-row pr-24 bg-gray-200 justify-center border-blue-100 border-2">
        <div className="flex-wrap w-3/4 mx-auto h-3/4 my-36">
          <p className="text-right  text-6xl font-bold flex-wrap">
            Biz Kimiz ?{" "}
          </p>
          <p className="text-right flex-wrap   text-4xl mt-4 italic font-serif ">
            Pendik Türk Telekom Şehit Murat Mertel Mesleki ve Teknik Anadolu
            Lisesi'nin İlk Spor Tesisini Yaptık.{" "}
          </p>
        </div>
      </div>

      <div className="  flex-row justify-center   border-2">
        <div className="flex-wrap w-3/4 mx-auto h-1/4 mt-24">
          <p className="text-center text-6xl font-bold flex-wrap font-serif">
            Neler Sunuyoruz?{" "}
          </p>
          <p className="text-right flex-wrap   text-4xl mt-4 italic font-serif ">
            Spor ile ilgili çalışmalarımızı sizlerle paylaşıyoruz.{" "}
          </p>
        </div>

        <div className="h-fit flex flex-wrap px-12  justify-center">
          <div className="flex-row bg-gray-300 rounded-xl w-56 m-8">
            <img
              src={kredi}
              className="bg-yellow-600 -ml-3 rounded-lg -mt-4 p-2"
            />
            <p className="text-center px-3 pb-2">Spor Haberleri</p>
            <p className="px-4 text-center pb-4">
              Gündelik hayattaki son dakika haberlerinden anından haberdar olun.
            </p>
          </div>
          <div className="flex-row bg-gray-300 rounded-xl w-56 m-8">
            <img
              src={kredi}
              className="bg-yellow-600 -ml-3 rounded-lg -mt-4 p-2"
            />
            <p className="text-center px-3 pb-2">Fikstürler</p>
            <p className="px-4 text-center pb-4">Maç tarihlerini gösterir.</p>
          </div>
          <div className="flex-row bg-gray-300 rounded-xl w-56 m-8">
            <img
              src={kredi}
              className="bg-yellow-600 -ml-3 rounded-lg -mt-4 p-2"
            />
            <p className="text-center ">Puan durumu</p>
            <p className="px-4 text-center pb-2">
              Canlı Tüm Liglerin anlık puan durumları.
            </p>
          </div>
          <div className="flex-row bg-gray-300 rounded-xl w-56 m-8">
            <img
              src={kredi}
              className="bg-yellow-600 -ml-3 rounded-lg -mt-4 p-2"
            />
            <p className="text-center px-3 pb-4">İletişim</p>
            <p className="px-4 text-center pb-8">Bize ulaşmak için</p>
          </div>
        </div>
      </div>

      <div className="flex-row pr-24 py-32 justify-center border-t-2 border-r-2 border-t-blue-100 border-r-blue-100 border-l-blue-100   ">
        <p className="text-center text-6xl font-bold flex-wrap">
          Kart ile üyelik SATIN AL{" "}
        </p>
        <div className="flex w-3/4 mx-auto h-3/4 mt-8 ">
          <div className="h-1/3 bg-gray-200 rounded-xl w-1/4 px-4 mt-8 mx-auto hover:scale-110 ">
            <img
              src={kredi}
              className="bg-yellow-500 -ml-3 rounded-lg -mt-4 p-2"
            />

            <p className="font-serif pt-8">Çaylak Paket</p>
            <p className="mt-8 text-yellow-500 text-3xl">355 TL </p>
            <button className="text-center border-2 w-1/2 mt-2 hover:scale-110 bg-gray-800 rounded-xl py-1 items-center text-white">
              İncele
            </button>
          </div>
          <div className="h-1/3 bg-gray-200 rounded-xl w-1/4 px-4 mt-8 mx-auto hover:scale-110 ">
            <img
              src={kredi}
              className="bg-yellow-500 -ml-3 rounded-lg -mt-4 p-2"
            />

            <p className="font-serif pt-8">Orta Paket</p>
            <p className="mt-8 text-yellow-500 text-3xl">520 TL </p>
            <button className="text-center border-2 w-1/2 mt-2 bg-gray-800 hover:scale-110 rounded-xl py-1 items-center text-white">
              İncele
            </button>
          </div>
          <div className="h-1/3 bg-gray-200 rounded-xl w-1/4 px-4 mt-8 mx-auto hover:scale-110 ">
            <img
              src={kredi}
              className="bg-yellow-500 -ml-3 rounded-lg -mt-4 p-2"
            />

            <p className="font-serif pt-8">Uzman Paket</p>
            <p className="mt-8 text-yellow-500 text-3xl">870 TL </p>
            <button className="text-center border-2 w-1/2 mt-2 bg-gray-800 hover:scale-110 rounded-xl py-1 items-center text-white">
              İncele
            </button>
          </div>
        </div>
      </div>

      <img src={abdFutbol} className="w-1/4 z-10 -mb-24" />
      <div className=" flex flex-row-reverse bg-blue-900 p-4 rounded-2xl z-0">
        <div className="flex flex-row justify-between  rounded-2xl px-4">
          <p className=" p-4 text-white font-serif italic text-2xl w-full rounded-2xl ">
            Herhangi bir problem ile karşılaştıysan lütfen bize ulaş
          </p>
          <button className="bg-white rounded-2xl p-4  border-2 border-blue-900 text-blue-900">
            Hemen İletişime Geç
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
