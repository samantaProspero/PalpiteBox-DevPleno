import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-2 mt-4'>
      <div className="container mx-auto text-center font-bold text-white">
        <p>Projeto desenvolvido por Samanta</p>
        <div className='mt-1'>
          <img className='inline px-3 w-1/5' src="/logo_semana_fsm.png" alt="logo-devPleno"/>
          <img className='inline px-3 w-1/5' src="/logo_devpleno.png" alt="logo-devPleno"/>
        </div>
      </div>
    </div>
  )
};

export default Footer;