import React, {useState} from 'react';
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 5
  })
  const notas = [0,1,2,3,4,5]
  const indica = ['Sim', 'Não']
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data= await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (error) {
      console.error(error)
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa'/>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre buscar atender melhor seus clientes.<br/>Por isso, estamos sempre abertos a ouvir sua opinião</p>
      {!success && <div className='w-1/5 mx-auto'>

        <label className='font-bold'>Nome: </label>
        <input type="text" className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>

        <label className='font-bold'>E-mail: </label>
        <input type="text" className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email}/>

        <label className='font-bold'>Whatsapp: </label>
        <input type="text" className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
        
        <label className='font-bold'>Que nota você daria ao eslabelecimento?</label>
        <div className='flex py-6'>
          {notas.map(nota =>{ 
            return ( 
              <label className='block w-1/6 text-center'>
                {nota} <br/>
                <input type="radio" name='Nota' value={nota} onChange={onChange}/>
              </label>
            )
          })}
        </div>

        {/* <label className='font-bold'>Você indicaria para um amigo?</label>
        <div className='flex py-6'>
          {indica.map(indicacao =>{ 
            return ( 
              <label className='block w-1/6 text-center'>
                {indicacao} <br/>
                <input type="radio" name='Indica' value='indicacao' />
              </label>
            )
          })}
        </div> */}
        
         {/* <pre>
          {JSON.stringify(form, null, 2)}
         </pre>  mostra o formulario na tela */}
        <br/>
        <button onClick={save} className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Salvar</button>

      </div>}
      {success && <div className='w-1/3 mx-auto'>
        <p className='text-center mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica</p>
        {
          retorno.showCoupon && 
            <div className='text-center border p-4 mb-4'>
              Seu cupom: <br/>
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
        }
        {
          retorno.showCoupon && 
            <div className='text-center border p-4 mb-4'>
              <span className='font-bold block mb-2'>{retorno.Promo}</span>
              <br/>
              <span className='italic'>Tire print ou foto desta tela e apresente ao garçom.</span>
            </div>
        }
        </div>}
    </div> 
  )
};

export default Pesquisa;