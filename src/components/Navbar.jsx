import React from 'react'
import Logo from "../photos/shopping/AlışverişSayfası_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex  border-b-2 justify-around py-5'>
      <div>
        <img src={Logo} className="" alt="Logo" />
      </div>

      <div className='flex-row my-auto' >
        <ul className='flex-row inline-flex gap-6  '>
            <li className='hover:bg-blue-900 p-3 hover:text-white rounded-2xl'>
              <Link to='/home'>Anasayfa</Link>
            </li>
            <li className='hover:bg-blue-900 p-3 hover:text-white rounded-2xl'>
              <Link to='/news'>Haberler</Link>
            </li>
            <li className='hover:bg-blue-900 p-3 hover:text-white rounded-2xl'>
              <Link to='/shopping'>Alışveriş</Link>
            </li>
            <li className='hover:bg-blue-900 p-3 hover:text-white rounded-2xl'>
              <Link to='/points'>Puan durumu</Link>
            </li>
            <li className='hover:bg-blue-900 p-3 hover:text-white rounded-2xl'>
              <Link to='/contact'>İletişim</Link>
            </li>
          </ul>
      </div>

      <div className='my-auto'>
        <button className='bg-blue-950 text-white p-5 rounded-2xl hover:bg-red-400'> Çıkış Yap</button>
      </div>
      
          
    </div>
  )
}

export default Navbar