import React, { useState } from "react";
import Navbar from "../components/Navbar";
import telefon from "../photos/contact/İletişimSayfası_Telefon3d.png";
import Logo from "../photos/shopping/AlışverişSayfası_Logo.png";
import Footer from "../components/Footer";
import konum from "../photos/contact/İletişimSayfası_Konum.png";
import mail from "../photos/contact/İletişimSayfası_MailSimge.png";
import tlf from "../photos/contact/İletişimSayfası_ÇağrıNo.png";

const Contact = () => {
  const [name, setname] = useState(null);
  const [mailAdres, setmailAdres] = useState(null);
  const [tlfNum, settlfNum] = useState(null);
  const [mesaj, setmesaj] = useState(null);
  return (
    <div>
      <Navbar />

      <div className="flex flex-row items-center justify-between  bg-gray-200 pl-12">
        <p className=" text-5xl font-serif italic">İletişim</p>
        <img src={telefon} />
      </div>

      <div className=" flex justify-center py-8 ">
        <img src={Logo} />
      </div>

      <div className="    w-1/2 flex mx-auto mb-4  justify-center">
        <div className="flex flex-row items-center p-2 bg-yellow-400 w-fit rounded-xl ">
          <img src={mail} />
          <p>efecelenk75@gmail.com</p>
        </div>
      </div>
      <div className="   w-1/2 flex mx-auto mb-4  justify-center">
        <div className="flex flex-row items-center p-2 bg-yellow-400 w-fit rounded-xl ">
          <img src={konum} />
          <p>Bağdat Caddesi No:1/A</p>
        </div>
      </div>
      <div className="w-1/2 flex mx-auto mb-4  justify-center">
        <div className="flex flex-row items-center p-2 bg-yellow-400 w-fit rounded-xl ">
          <img src={tlf} />
          <p className="ml-8">+90 567 890 1234</p>
        </div>
      </div>

      <div className="flex flex-col w-1/2 text-center mx-auto my-12 ">
        <p className="text-3xl font-semibold">Bizimle İletişime Geçin</p>
        <p className="">
          Bizimle her konuda düşüncelerinizi paylaşabilirsiniz.
        </p>
      </div>

      <div>
        <div className="flex flex-row flex-wrap w-4/5 text-center mx-auto my-12 justify-center">
          <input
            type="text"
            onChange={setname}
            placeholder="İsim Soyisim"
            className="w-1/2 mx-auto bg-gray-200 p-2 m-4 border-2 border-blue-400"
          />
          <input
            type="text"
            onChange={setmailAdres}
            placeholder="E-posta"
            className="w-1/2 mx-auto bg-gray-200 p-2 m-4 border-2 border-blue-400"
          />
          <input
            type="text"
            placeholder="Telefon"
            onChange={settlfNum}
            className="w-1/2 mx-auto bg-gray-200 border-2 border-blue-400 p-2 m-4"
          />
          <input
            type="text"
            onChange={setmesaj}
            placeholder="Mesajınız..."
            className="w-1/2 mx-auto bg-gray-200 border-2 border-blue-400 p-2 m-4 flex-wrap"
          />
          <button className="bg-yellow-400 p-3 rounded-lg">Gönder</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
