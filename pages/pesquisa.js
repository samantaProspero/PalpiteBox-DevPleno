import React from 'react';
import Link from 'next/link';

const Pesquisa = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre buscar atender melhor seus clientes.<br/>Por isso, estamos sempre abertos a ouvir sua opinião</p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome: </label>
        <input type="text" className='p-4 block shadow bg-blue-200 my-2 rounded'/>
      </div>
      <div className='text-center my-12'>
        <Link href="/pesquisa">
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Enviar</a>
        </Link>
      </div>
    </div>
  )
};

export default Pesquisa;