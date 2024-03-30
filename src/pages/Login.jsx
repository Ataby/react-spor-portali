import * as React from "react";
import girisEkranı from "../photos/signIn/GirişEkranı_PP.png";
import girisEkranıSarıKısım from "../photos/signIn/GirişEkranıSarıKısım.png";
import cocuk from "../photos/signIn/GirişEkranı_3dmodel.png";
import { useState } from "react";
import { Link } from "react-router-dom";
 

const Login = ({kullanici,setKullanici,sifre,setSifre}) => {
   
  return (
    <div className="flex bg-blue-950 h-full">
      <div className="w-1/2 mt-20  ">

        <div className ='  text-center '>
          <img className ='w-2/4 m-auto' src={girisEkranı} alt="girisEkranı" />
          <h1 className=' text-5xl text-white ' >Hoşgeldiniz </h1>
           
        </div>

        <div className="mt-8 px-8 items-center ">
          <div className="mb-6 ">        
            <input type="text" name="username" id="username"
            className="block flex-1 w-2/3 m-auto border-b-4 border-yellow-500 bg-blue-900 py-3 px-4 text-white placeholder:text-white placeholder:text-2xl   sm:text-sm sm:leading-6" placeholder="Kullanıcı Adı" onChange={(e)=> setKullanici(e.target.value)} />
          </div>

          <div className=" ">          
            <input type="text" name="sifre" id="sifre"  
            className="block flex-1 m-auto w-2/3 border-b-4 border-yellow-500 bg-blue-900 py-3 px-4 text-gray-900 placeholder:text-white placeholder:text-2xl   sm:text-sm sm:leading-6" placeholder="Şifre" onChange={(e)=> setSifre(e.target.value)} />
            
          </div>

          <div className="   flex-col text-center">
            <button className="w-2/3 text-white"> Şifrenizi mi unuttunuz ?</button>
            <button className=" rounded-lg mt-4 bg-yellow-500 text-blue-900 border-2 w-2/3 m-auto p-3 text-xl "><Link to="home">Giriş yap </Link> </button>
            <button className=" rounded-lg mt-4 bg-yellow-500 text-blue-900 border-2 w-2/3 m-auto p-3 text-xl"><Link to="home">Admin Giriş</Link></button>
            <button className=" rounded-lg mt-4 bg-yellow-500 text-blue-900 border-2 w-2/3 m-auto p-3 text-xl"><Link to="register">Yeni Kullanıcı Oluştur</Link> </button>
          </div>

        </div>

      </div>
      
      <div className="w-1/2 h-full justify-between "> 
        <div className=" h-full flex align-items-center">
          <div className="w-1/3 z-0 mt-36 ">
               <img src={cocuk} className="z-10 ml-72 "  alt="cocuk" />         

          </div>

          <div className="w-2/3 z-10   ">
            <img src={girisEkranıSarıKısım} className="z-0 "  alt="sarı" /> 

          </div>
        </div>  
      </div>
      
    </div>
  )
}

export default Login