import './App.css'

import Logo from './assets/logo.svg';
import US from './assets/us.svg';
import Apple from './assets/apple.svg';
import Google from './assets/google.svg';

function App() {

  return (
    <>
      <header>

        <nav className='flex mt-[17px] justify-between items-center h-[40px] px-[40px]'>
          <a href='#'>
            <img src={Logo} alt="Logo" />
          </a>
          <div className='flex items-center gap-8'>
            <div className='flex gap-8 font-medium'>
              <span>How it works</span>
              <span>All apps</span>
              <span>Pricing</span>
              <span>For Teams</span>
              <span>Blog</span>
              <span>Podcast</span>
            </div>
            <span className='w-[1px] h-[20px] bg-white'>&nbsp;</span>
            <div className='flex items-center gap-8'>
              <img src={US} alt="US Flag" />
              <span>
                Sign In
              </span>
              <button className='border rounded-md box-border px-6 py-1 hover:cursor-pointer font-normal'>Try Free</button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className='flex flex-col margin-x-auto items-center text-center gap-6 pt-20 pb-20 px-120'>
            <img src={Logo} alt="Logo" className='w-[128.75px] h-[128.75px] bg-black p-4 rounded-4xl' />
            <h1 className='text-7xl/19 font-bold'>Dozens of apps. One subscription. $9.99</h1>
            <div className='flex'>
              <button className='bg-white text-[#26262B] px-6 py-2 rounded-md font-medium hover:cursor-pointer'>Try free for 7 days</button>
              <button className='bg-white text-[#26262B] px-6 py-2 rounded-md font-medium hover:cursor-pointer'><img src={Apple} alt="Apple Logo" /></button>
              <button className='bg-white text-[#26262B] px-6 py-2 rounded-md font-medium hover:cursor-pointer'><img src={Google} alt="Google Logo" /></button>
            </div>
            <p>Power up your workflow with Setapp, a smart way to get apps.</p>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
