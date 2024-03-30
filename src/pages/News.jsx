import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import haberler from "../photos/news/HaberlerSayfası_3Dmodel.png"
import { Carousel } from "@material-tailwind/react";
import r1 from "../photos/news/Slider Ekran/HaberlerSayfası_SliderEkran1.jpg"
import r2 from "../photos/news/Slider Ekran/Haberler_Sayfası_SliderEkran2.jpg"
import r3 from "../photos/news/Slider Ekran/Haberler_Sayfası_SliderEkran3.jpg"
import k1 from "../photos/news/Haberler Div Kutuları/kutu1.png"
import k2 from "../photos/news/Haberler Div Kutuları/kutu2.png"
import k3 from "../photos/news/Haberler Div Kutuları/kutu3.png"
import k4 from "../photos/news/Haberler Div Kutuları/kutu4.png"
import k5 from "../photos/news/Haberler Div Kutuları/kutu5.png"
import k6 from "../photos/news/Haberler Div Kutuları/kutu6.png"
import k7 from "../photos/news/Haberler Div Kutuları/kutu7.png"
import k8 from "../photos/news/Haberler Div Kutuları/kutu8.png"
import k9 from "../photos/news/Haberler Div Kutuları/kutu9.png"
 


const News = () => {
  const resimler = [k1, k2, k3, k4, k5, k6, k7, k8,k9];
  return (
    <div>
      <Navbar/>
      <div className="flex flex-row items-center justify-between  bg-gray-200 pl-12">
        <p className=" text-5xl font-serif italic">Haberler</p>
        <img src={haberler} />
      </div>

      <div className='w-3/4 mx-auto my-12 '>
      <Carousel className="rounded-xl">
      <img
        src={r1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={r2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={r3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

      </div>

      <div className='w-full flex flex-wrap gap-8 p-12 bg-yellow-400'>
        {resimler.map((item)=> (
          <img src={item} className='hover:scale-110 rounded-md' />
        ))}

      </div>


      <Footer/>
    </div>
  )
}

export default News