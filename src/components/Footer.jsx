import React from "react";
import Logo from "../photos/shopping/AlışverişSayfası_Logo.png";
import { Link } from "react-router-dom";
import tlf from "../photos/contact/İletişimSayfası_ÇağrıNo.png"
import konum from "../photos/contact/İletişimSayfası_Konum.png"
import mail from "../photos/contact/İletişimSayfası_MailSimge.png"
import sosyal from "../photos/homePage/AnaEkran_SosyalMedya.png"

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly bg-gray-500 ">
      <div>
        <img src={Logo} />
      </div>

      <div className=" p-2 text-white ">
        <p className="p-2">
          {" "}
          <Link to="home"> Anasayfa</Link>{" "}
        </p>
        <p className="p-2">
          {" "}
          <Link to="news"> Haberler</Link>{" "}
        </p>
        <p className="p-2">
          {" "}
          <Link to="shopping"> Alışveriş</Link>{" "}
        </p>
        <p className="p-2">
          {" "}
          <Link to="points"> Puan Durumu</Link>{" "}
        </p>
        <p className="p-2">
          {" "}
          <Link to="contact"> İletişim</Link>{" "}
        </p>
      </div>

      <div className="bg-gray-500 flex flex-col justify-center ">
        <img className="p-2 w-2/3 mx-auto" src={tlf} />
        <img className="p-2 w-2/3 mx-auto" src={konum} />
        <img className="p-2 w-2/3 mx-auto" src={mail} />
         
         
      </div>
      <div className="flex items-center ">
<img src={sosyal} />
      </div>
    </div>
  );
};

export default Footer;
