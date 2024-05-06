import React from 'react'
import HomePageNavBar from './HomePageNavBar'
import { useLocation } from 'react-router-dom'

 const Header = () => {

const location = useLocation(); //useLocation ---> Mevcut URL’in konum bilgisine erişim sağlar.

  const selectedNavbar=()=>{
    if(location.pathname ==="/"|| location.pathname==="/movies") 
      return <HomePageNavBar/>   
  }
  
  return (
    <>
     {selectedNavbar()}
   </>
  )
}

export default Header