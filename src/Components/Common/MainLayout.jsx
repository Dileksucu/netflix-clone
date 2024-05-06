import React from 'react'
import  Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"

// Sitenin genelinde geçerli olan Header ve Footer alanı burada oluşturulur
 const MainLayout = () => { //Genel iskelet
  return (
    <>
     <Header/>
     <Outlet/> {/*Değişen kısım -Layout içerisine gelen hangi sayfa olursa olsun render olabilmesi için eklenir. */}
     <Footer/>
    </>
  )
}

export default MainLayout;