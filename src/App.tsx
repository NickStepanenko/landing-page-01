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

import MacJunk from './assets/img/mac-junk.png';
import MacPink from './assets/img/mac-pink.png';

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
          <div className='flex relative py-39'>
            <div className='flex-1 relative'>
              <img src={Pics} alt="Work with pics" className='absolute top-[28px] -left-[14px]' />
              <img src={Macpaw} alt="Macpaw App" className='absolute top-[159px] -left-[15px]' />
              <img src={PDF} alt="PDF App" className='absolute top-[152px] left-[89px]' />
              <img src={Teamwork} alt="Teamwork App" className='absolute top-[320px] -left-[19px]' />
              <img src={Secure} alt="Secure App" className='absolute top-[400px] -left-[20px]' />
            </div>
            <div className='flex flex-col flex-2 margin-x-auto items-center text-center gap-10'>
              <img src={Logo} alt="Logo" className='w-[128px] h-[128px] bg-black p-4 mb-5 rounded-4xl shadow-sm' />
              <h1 className='text-[64px]/[68px] font-bold mb-4'>Dozens of apps. One subscription. $9.99</h1>
              <div className='flex gap-3.5'>
                <button className='bg-white text-[#26262B] px-[32px] py-[13px] text-[16px] rounded-md hover:cursor-pointer mr-2'>Try free for 7 days</button>
                <button className='bg-white px-[15px] py-[10px] rounded-md hover:cursor-pointer'><img src={Apple} alt="Apple Logo" /></button>
                <button className='bg-white px-[15px] py-[10px] rounded-md hover:cursor-pointer'><img src={Google} alt="Google Logo" /></button>
              </div>
              <p className='text-[16px]/[32px] font-light px-36'>Power up your workflow with Setapp, a smart way to get apps.</p>
            </div>
            <div className='flex-1 relative'>
              <img src={Wifi} alt="Wifi App" className='absolute top-[46px] left-[153px]' />
              <img src={Plan} alt="Plan App" className='absolute top-[106px] left-[62px]' />
              <img src={Manage} alt="Manage App" className='absolute top-[318px] left-[81px]' />
              <img src={Converter} alt="Converter App" className='absolute top-[217px] left-[214px]' />
              <img src={Code} alt="Code App" className='absolute top-[422px] left-[140px]' />
            </div>
          </div>
        </section>
        <section>
          <div className='border-t-1 border-b-1'>
            <div className='flex my-[101px] items-start'>
              <p className='flex-1 font-semibold text-[36px] leading-[52px]'>What you get on Setapp.</p>
              <p className='flex-1 font-light text-[18px] leading-[32px] tracking-normal pr-[45px]'>With a single monthly subscription at $9.99, you get 240+ apps for your Mac.</p>
            </div>
            <div className='bg-[#DF96AE] rounded-[20px] px-[37px]'>
              <div className='flex pt-[60px] px-[23px] items-center gap-9'>
                <img src={MacPink} alt="Mac Pink" className='row-span-2 h-[80px]' />
                <div>
                  <h2 className='text-[#26262B] font-semibold text-[26px] tracking-normal leading-[40px]'>Keep your Mac clean</h2>
                  <p className='text-[#26262B] font-light text-[18px] leading-[32px] tracking-normal pr-[45px]'>Remove junk, scan for malware, wipe email attachments</p>
                </div>
              </div>
              <img src={MacJunk} alt="Mac Junk" />
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <p>View all superpowers</p>
            <div>
              <p>Your Setapp journey.</p>
              <p>Type in your task into Setapp search and get instant app recommendations.</p>
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
