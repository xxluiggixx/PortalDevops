import React from 'react'

const getYear = () =>{
  const year = new Date().getFullYear();
  return year;
}


export const Footer = () => {
  return (
    <div>
        Copyright ® { getYear() } Sistemas Operativos
    </div>
  )
}
