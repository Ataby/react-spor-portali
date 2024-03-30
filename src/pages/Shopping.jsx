import React from "react";
import Navbar from "../components/Navbar";
import mall from "../photos/shopping/AlışverişSayfası_Shop3d.png";
import Footer from "../components/Footer";
import kr1 from "../photos/shopping/Kramponlar/AlışverişSayfası_Krampon1.png";
import kr2 from "../photos/shopping/Kramponlar/AlışverişSayfası_Krampon2.png";
import kr3 from "../photos/shopping/Kramponlar/AlışverişSayfası_Krampon3.png";
import kr4 from "../photos/shopping/Kramponlar/AlışverişSayfası_Krampon4.png";
import kr5 from "../photos/shopping/Kramponlar/AlışverişSayfası_Krampon5.png";
import ks1 from "../photos/shopping/Koşu Ayakkabı/AlışverişSayfası_Koşu1.png";
import ks2 from "../photos/shopping/Koşu Ayakkabı/AlışverişSayfası_Koşu2.png";
import ks3 from "../photos/shopping/Koşu Ayakkabı/AlışverişSayfası_Koşu3.png";
import ks4 from "../photos/shopping/Koşu Ayakkabı/AlışverişSayfası_Koşu4.png";
import ks5 from "../photos/shopping/Koşu Ayakkabı/AlışverişSayfası_Koşu5.png";
import eld1 from "../photos/shopping/Eldiven Ve Formalar/AlışverişSayfası_Eldiven1.png";
import eld2 from "../photos/shopping/Eldiven Ve Formalar/AlışverişSayfası_Eldiven2.png";
import eld3 from "../photos/shopping/Eldiven Ve Formalar/AlışverişSayfası_GS1.png";
import eld4 from "../photos/shopping/Eldiven Ve Formalar/AlışverişSayfası_GS2.png";
import eld5 from "../photos/shopping/Eldiven Ve Formalar/AlışverişSayfası_GS3.png";
import kyf1 from "../photos/shopping/Erkek Ve Kadın Kıyafet/AlışverişSayfası_ErkekKıyafet1.png";
import kyf2 from "../photos/shopping/Erkek Ve Kadın Kıyafet/AlışverişSayfası_ErkekKıyafet2.png";
import kyf3 from "../photos/shopping/Erkek Ve Kadın Kıyafet/AlışverişSayfası_ErkekKıyafet3.png";
import kyf4 from "../photos/shopping/Erkek Ve Kadın Kıyafet/AlışverişSayfası_KadınKıyafet4.png";
import kyf5 from "../photos/shopping/Erkek Ve Kadın Kıyafet/AlışverişSayfası_KadınKıyafet5.png";
import c1 from "../photos/shopping/Çocuk Kıyafet/AlışverişSayfası_ÇocukKıyafet1.png";
import c2 from "../photos/shopping/Çocuk Kıyafet/AlışverişSayfası_ÇocukKıyafet3.png";
import c3 from "../photos/shopping/Çocuk Kıyafet/AlışverişSayfası_ÇocukKıyafet4.png";
import c4 from "../photos/shopping/Çocuk Kıyafet/AlışverişSayfası_ÇocukKıyafet5.png";

const Shopping = () => {
  const kramponlar = [kr1, kr2, kr3, kr4, kr5];
  const kosuAyakkabi = [ks1, ks2, ks3, ks4, ks5];
  const eldiven = [eld1, eld2, eld3, eld4, eld5];
  const erkekKıyafet = [kyf1, kyf2, kyf3, kyf4, kyf5];
  const cocukKıyafet = [c1, c2, c3, c4];

  return (
    <div>
      <Navbar />

      <div className="flex flex-row items-center justify-between  bg-gray-200 pl-12">
        <p className=" text-5xl font-serif italic">Alışveriş</p>
        <img src={mall} />
      </div>

      <div className=" flex flex-col justify-start py-8 px-8 ">
        <div className="flex flex-row">
          <p className="text-blue-500">Koşu Ayakkabılarında - </p>
          <p> EN İYİ FİYATLAR</p>
        </div>
        <div className="flex  gap-x-2">
          {kosuAyakkabi.map((item, index) => {
            return (
              <div className="w-1/5 mx-auto border-2 hover:border-blue-500 flex flex-col justify-evenly rounded-lg">
                <img src={item} className="   bg-gray-200 rounded-lg" />
                <p className="">Koşu ayakkabısı{index}</p> <p>2600 TL</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col justify-start py-8 px-8 ">
        <div className="flex flex-row">
          <p className="text-blue-500">Kramponlarda - </p>
          <p> EN İYİ FİYATLAR</p>
        </div>
        <div className="flex  gap-x-2">
          {kramponlar.map((item, index) => {
            return (
              <div className="w-1/5 mx-auto border-2 hover:border-blue-500 flex flex-col justify-evenly rounded-lg">
                <img src={item} className="   bg-gray-200 rounded-lg" />
                <p className="">Krampon{index}</p>
                <p>2600 TL</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col justify-start py-8 px-8 ">
        <div className="flex flex-row">
          <p className="text-blue-500">Kıyafet - </p>
          <p> EN İYİ FİYATLAR</p>
        </div>
        <div className="flex  gap-x-2">
          {erkekKıyafet.map((item, index) => {
            return (
              <div className="w-1/5 mx-auto border-2 hover:border-blue-500 flex flex-col justify-evenly rounded-lg">
                <img src={item} className="   bg-gray-200 rounded-lg" />
                <p className="">Kıyafet{index}</p> <p>2600 TL</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col justify-start py-8 px-8 ">
        <div className="flex flex-row">
          <p className="text-blue-500">Eldivenlerde - </p>
          <p> EN İYİ FİYATLAR</p>
        </div>
        <div className="flex  gap-x-2">
          {eldiven.map((item, index) => {
            return (
              <div className="w-1/5 mx-auto border-2 hover:border-blue-500 flex flex-col justify-evenly rounded-lg">
                <img src={item} className="   bg-gray-200 rounded-lg" />
                <p className="">giyim-{index}</p> <p>2600 TL</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col justify-start py-8 px-8 ">
        <div className="flex flex-row">
          <p className="text-blue-500">Çocuk Giyimde - </p>
          <p> EN İYİ FİYATLAR</p>
        </div>
        <div className="flex  gap-x-2">
          {cocukKıyafet.map((item, index) => {
            return (
              <div className="w-1/5 mx-auto border-2 hover:border-blue-500 flex flex-col justify-evenly rounded-lg">
                <img src={item} className="   bg-gray-200 rounded-lg" />
                <p className="">çocuk-{index}</p> <p>2600 TL</p>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shopping;
