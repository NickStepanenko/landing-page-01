import './App.css'

import Logo from './assets/logo.svg';
import US from './assets/us.svg';
import Apple from './assets/apple.svg';
import Google from './assets/google.svg';

import Pics from './assets/pics.svg';
import Macpaw from './assets/macpaw.svg';
import PDF from './assets/pdf.svg';
import Teamwork from './assets/teamwork.svg';
import Converter from './assets/converter.svg';
import Code from './assets/code.svg';
import Plan from './assets/plan.svg';
import Manage from './assets/manage.svg';
import Wifi from './assets/wifi.svg';
import Secure from './assets/secure.svg';

function App() {

  return (
    <>
      <header>
        <nav className='flex mt-[17px] justify-between items-center h-[39px] px-[39px]'>
          <a href='#'>
            <img src={Logo} alt="Logo" />
          </a>
          <div className='flex items-center gap-8'>
            <div className='flex gap-9 font-500'>
              <span>How it works</span>
              <span>All apps</span>
              <span>Pricing</span>
              <span>For Teams</span>
              <span>Blog</span>
              <span>Podcast</span>
            </div>
            <span className='w-[1px] h-[20px] bg-white'>&nbsp;</span>
            <div className='flex items-center gap-9'>
              <img src={US} alt="US Flag" />
              <span>Sign In</span>
              <div className='pt-[1.29px]'>
                <button className='border rounded-md box-border px-7 py-1 font-light leading-7 hover:cursor-pointer'>Try free</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className='px-[130px]'>
        <section className='relative'>
          <div className='flex relative py-40'>
            <div className='flex-1 relative'>
              <img src={Pics} alt="Work with pics" className='absolute top-[10px]' />
              <img src={Macpaw} alt="Macpaw App" className='absolute top-[200px]' />
              <img src={PDF} alt="PDF App" className='absolute top-[300px]' />
              <img src={Teamwork} alt="Teamwork App" className='absolute top-[400px]' />
              <img src={Secure} alt="Secure App" className='absolute top-[500px]' />
            </div>
            <div className='flex flex-col flex-2 margin-x-auto items-center text-center gap-14'>
              <img src={Logo} alt="Logo" className='w-[128.75px] h-[128.75px] bg-black p-4 rounded-4xl' />
              <h1 className='text-7xl/19 font-bold'>Dozens of apps. One subscription. $9.99</h1>
              <div className='flex gap-3'>
                <button className='bg-white text-[#26262B] px-8 py-2 rounded-md font-medium hover:cursor-pointer mr-3'>Try free for 7 days</button>
                <button className='bg-white text-[#26262B] px-4 py-2 rounded-md font-medium hover:cursor-pointer'><img src={Apple} alt="Apple Logo" /></button>
                <button className='bg-white text-[#26262B] px-4 py-2 rounded-md font-medium hover:cursor-pointer'><img src={Google} alt="Google Logo" /></button>
              </div>
              <p className='text-lg px-36'>Power up your workflow with Setapp, a smart way to get apps.</p>
            </div>
            <div className='flex-1 relative'>
              <img src={Wifi} alt="Wifi App" className='absolute' />
              <img src={Plan} alt="Plan App" className='absolute' />
              <img src={Converter} alt="Converter App" className='absolute' />
              <img src={Manage} alt="Manage App" className='absolute' />
              <img src={Code} alt="Code App" className='absolute' />
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
