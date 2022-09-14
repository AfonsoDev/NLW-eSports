import './styles/main.css'
import logo from './assets/Logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img  src={logo} />

      <h1 className="text-6xl text-white font-black">Seu <span className='text-transparent bg-nwl-gradient bg-clip-text '>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'></strong>
              <span className='text-zinc-300 font-sm block'></span>
            </div>
        </a>
      </div>

      <div className='pt-1 bg-nwl-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div className=''>
          <strong className=''>Não encontrou seu duo?</strong>
          <span>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white hover:bg-violet-600 rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
