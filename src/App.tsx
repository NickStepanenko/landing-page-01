import './App.css'

import Logo from './assets/svg/logo.svg';
import US from './assets/svg/us.svg';
import Apple from './assets/svg/apple.svg';
import Google from './assets/svg/google.svg';

import Pics from './assets/svg/pics.svg';
import Macpaw from './assets/svg/macpaw.svg';
import PDF from './assets/svg/pdf.svg';
import Teamwork from './assets/svg/teamwork.svg';
import Converter from './assets/svg/converter.svg';
import Code from './assets/svg/code.svg';
import Plan from './assets/svg/plan.svg';
import Manage from './assets/svg/manage.svg';
import Wifi from './assets/svg/wifi.svg';
import Secure from './assets/svg/secure.svg';

import MacJunk from './assets/img/mac-junk.png';
import MacPink from './assets/img/mac-pink.png';

import Arrow from './assets/svg/arrow.svg';

import CallStack from './assets/img/call-stack.png';
import EditorIcon from './assets/img/editor-icon.png';
import Editor from './assets/img/editor.png';
import Meetings from './assets/img/meetings.png';

import Person from './assets/img/person.png';
import Play from './assets/svg/play.svg';
import ArrowSlides from './assets/svg/arrow-slides.svg';
import ArrowSlidesDark from './assets/svg/arrow-slides-dark.svg';
import ArrowSlidesWhite from './assets/svg/arrow-slides-white.svg';

import Facebook from './assets/svg/facebook.svg';
import Twitter from './assets/svg/twitter.svg';
import Instagram from './assets/svg/instagram.svg';
import Youtube from './assets/svg/youtube.svg';
import FacebookIcon from './assets/svg/facebook-icon.svg';
import InstagramIcon from './assets/svg/instagram-icon.svg';
import TwitterIcon from './assets/svg/twitter-icon.svg';
import FacebookWhite from './assets/svg/facebook-white.svg';
import InstagramWhite from './assets/svg/instagram-white.svg';
import TwitterWhite from './assets/svg/twitter-white.svg';
import YoutubeWhite from './assets/svg/youtube-white.svg';

import Setapp from './assets/svg/logo-setapp.svg';
import Heart from './assets/svg/heart.svg';

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
      <main>
        <section className='relative px-[130px]'>
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
        <section className='px-[130px]'>
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
            <div className='flex gap-6 mt-6'>
              <div className='flex flex-1 flex-col bg-[#F4F0E4] rounded-[20px] text-[#26262B]'>
                <img src={Editor} alt="Editor" />
                <div className='px-[60px] pb-[60px]'>
                  <img src={EditorIcon} alt="Editor Icon" className='h-[80px]' />
                  <h4 className='font-semibold text-[26px] leading-[40px] tracking-normal pt-[20px]'>Write code</h4>
                  <p className='text-[18px] leading-[32px] tracking-normal'>Create applications in more than 25 languages</p>
                </div>
              </div>
              <div className='flex flex-1 flex-col bg-[#384C75] rounded-[20px]'>
                <div className='px-[60px] pt-[60px]'>
                  <img src={Meetings} alt="Meetings" className='h-[68px]' />
                  <h4 className='font-semibold text-[26px] leading-[40px] tracking-normal pt-[20px]'>Join meetings in a click</h4>
                  <p className='text-[18px] leading-[32px] tracking-normal'>Quickly access links to your meetings from menu bar</p>
                </div>
                <img src={CallStack} alt="Call Stack" className='pt-[53px]'/>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 mt-[101px]'>
              <img src={Arrow} alt="Arrow" />
              <p className='text-[20px] tracking-[1.6px]'>View all superpowers</p>
            </div>
            <div className='flex my-[101px] items-start gap-6'>
              <p className='flex-1 font-semibold text-[36px] leading-[52px]'>Your Setapp journey.</p>
              <p className='flex-1 font-light text-[18px] leading-[32px] tracking-normal'>Type in your task into Setapp search and get instant app recommendations.</p>
            </div>
          </div>
        </section>
        <section className='px-[42.5px] mt-[101px] bg-gradient-to-b from-[#26262B] from-50% to-white to-50%'>
          <div className='bg-[#765070] rounded-[20px] flex gap-4 px-[60px] relative'>
            <div className='flex flex-col gap-4 flex-1 justify-around my-[110px] ml-[30px]'>
              <div className='flex flex-col gap-6'>
                <p className='text-[26px] tracking-normal leading-[40px]'>Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.</p>
                <p className='text-[16px] font-light tracking-normal'>Jason Staczek</p>
              </div>
              <span className='bg-white rounded-full h-[74px] w-[74px] flex items-center justify-center'><img src={Play} alt="Play" className='m-auto' /></span>
            </div>
            <img src={Person} alt="Person" className='w-[670px] flex-1 mt-[20px]'/>
            <div className='flex absolute right-[40px] top-[60px] items-start gap-12 flex-0'>
              <img src={ArrowSlides} alt="Arrow Slides" className='rotate-180' />
              <img src={ArrowSlides} alt="Arrow Slides" />
            </div>
          </div>
          <div className='flex justify-center items-center gap-7 py-12'>
            <button className='h-[12px] w-[12px] bg-[#1D1D22] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
          </div>
        </section>
        <section className='px-[130px] bg-white text-[#26262B]'>
          <div className='flex pt-[101px] items-start gap-9'>
            <p className='flex-2 font-semibold text-[36px] leading-[52px]'>Setapp in your words.</p>
            <p className='flex-1 text-[18px] leading-[32px] tracking-normal'>What you say about how Setapp powers you up.</p>
            <div className='flex flex-1 justify-end gap-3'>
              <img src={Facebook} alt="Facebook" className='hover:cursor-pointer' />
              <img src={Twitter} alt="Twitter" className='hover:cursor-pointer' />
              <img src={Instagram} alt="Instagram" className='hover:cursor-pointer' />
              <img src={Youtube} alt="Youtube" className='hover:cursor-pointer' />
            </div>
          </div>
          <div className='flex py-[26px] items-center justify-end gap-14 flex-0'>
            <img src={ArrowSlidesDark} alt="Arrow Slides" className='rotate-180 opacity-60' />
            <img src={ArrowSlidesDark} alt="Arrow Slides" className='opacity-60'/>
          </div>
          <div className='grid grid-cols-3 gap-10 px-[8px] text-[#26262B] '>
            <div className='grid-row-span-1 flex-1'>
              <p className='bg-[#71719A] font-medium h-full py-12 px-6 text-white text-[26px] leading-[37px] tracking-normal rounded-[8px]'>Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.</p>
            </div>
            <div className='grid-row-span-1 flex-1'>
              <p className='bg-[#D9AE89] font-medium h-full py-12 px-7 h-full text-white text-[26px] leading-[37px] tracking-normal rounded-[8px]'>My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.</p>
            </div>
            <div className='grid-row-span-1 flex-1'>
              <p className='bg-[#765070] font-medium h-full py-12 px-6 h-full text-white text-[26px] leading-[37px] tracking-normal rounded-[8px]'>For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!</p>
            </div>
            <div className='flex justify-between items-end px-6'>
              <div className=''>
                <p className='font-semibold tracking-normal leading-[32px] text-[18px]'>Arash Pourhabibi</p>
                <p className='font-semibold tracking-normal leading-[25px] text-[#9F9F9F]'>@ArashPourhabibi</p>
              </div>
              <img src={TwitterIcon} alt="Twitter Icon" className='pb-4' />
            </div>
            <div className='flex justify-between items-end px-6'>
              <div className=''>
                <p className='font-semibold tracking-normal leading-[32px] text-[18px]'>Mauricio Sanchez</p>
                <p className='font-semibold tracking-normal leading-[25px] text-[#9F9F9F]'>@m741s</p>
              </div>
              <img src={InstagramIcon} alt="Instagram Icon" className='pb-4' />
            </div>
            <div className='flex justify-between items-end px-6'>
              <div className=''>
                <p className='font-semibold tracking-normal leading-[32px] text-[18px]'>Meredith Sweet</p>
                <p className='font-semibold tracking-normal leading-[25px] text-[#9F9F9F]'>@meredith.sweet.silberstein</p>
              </div>
              <img src={FacebookIcon} alt="Facebook Icon" className='pb-4' />
            </div>
          </div>
          <div className='flex justify-center items-center gap-7 mt-14'>
            <button className='h-[12px] w-[12px] bg-[#1D1D22] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
            <button className='h-[12px] w-[12px] bg-[#D5D4D4] rounded-full'></button>
          </div>
        </section>
        <section className='px-[55px] pt-[140px] bg-gradient-to-b from-white from-59% to-[#2B2D32] to-41%'>
          <div className='bg-white text-[#26262B] rounded-[20px] py-[95px] px-[75px] flex flex-col gap-4 items-start'>
            <img src={Logo} alt="Logo" className='h-[123px]' />
            <h1 className='font-semibold text-[46px] leading-[60px] tracking-[1.3px] pt-1'>Superpowers starting $9.99/month.<br/> Free for 7 days.</h1>
            <div className='flex pt-14 gap-7'>
              <button className='bg-[#26262B] text-white px-[32px] py-[13px] text-[16px] rounded-md hover:cursor-pointer'>Get started now</button>
              <button className='bg-white text-[#26262B] border-1 border-[#26262B] px-[32px] py-[13px] text-[16px] rounded-md hover:cursor-pointer'>More about Setapp</button>
            </div>
          </div>
        </section>
      </main>
      <footer className='px-[40px] pt-[60px] bg-[#2B2D32]'>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-1 justify-between flex-col py-5'>
            <div className='flex items-center gap-4'>
              <img src={Logo} alt="Logo" className='h-[32px]' />
              <img src={Setapp} alt="Setapp Logo" className='h-[14px]' />
            </div>
            <div className='flex justify-between flex-col gap-6 mb-10'>
              <div className='flex items-center'>
                <p className='tracking-none'>Updates from our team, written with love </p>
                <img src={Heart} alt="Heart" className='h-[16px] pl-[2px]' />
              </div>
              <form className='flex items-center pb-[55px]'>
                <input type="email" placeholder='Enter your email' className='bg-[#404547] w-[388px] rounded-l-[6px] px-[12px] py-[14px] w-[250px] focus:outline-none tracking-normal text-[16px]' />
                <button type="submit" className='bg-white text-[#26262B] px-[23px] py-[18px] rounded-r-[6px] hover:cursor-pointer'>
                  <img src={ArrowSlidesDark} alt="Arrow Slides" className='w-[8px] opacity-60'/>
                </button>
              </form>
            </div>
          </div>
          <div className='flex flex-1 gap-2 font-light text-[15px] tracking-none leading-[32px] pt-5'>
            <ul className='flex-1'>
              <li>Home</li>
              <li>How It Works</li>
              <li>All Apps</li>
              <li>Pricing</li>
              <li>Setapp for Teams</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Download</li>
            </ul>
            <ul className='flex-1'>
              <li>About</li>
              <li>Support</li>
              <li>Education Discount</li>
              <li>Family Plan</li>
              <li>For Developers</li>
              <li>Gift Cards</li>
              <li>Redeem Card or Code</li>
              <li>Setapp Reviews</li>
              <li>Affiliate Program</li>
              <li>Mac Developer Survey 2023</li>
            </ul>
            <ul className='flex-1'>
              <li>Getting started with Setapp</li>
              <li>Remote access to other Mac</li>
              <li>Fix macOS Ventura</li>
              <li>problems</li>
              <li>Best productivity apps</li>
              <li>Best YouTube downloaders</li>
              <li>Uninstall apps</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-between border-b-1 py-11'>
          <div>
            <span className='bg-[#969799] font-[Arial] font-bold text-[10px] leading-[26px] tracking-none px-[6px] py-[8px]'>DMCA</span>
            <span className='bg-[#404547] font-[Arial] font-bold text-[10px] leading-[26px] tracking-none px-[6px] py-[8px]'>PROTECTED</span>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <img src={US} alt="US Flag" />
            <p>English</p>
            <img src={ArrowSlidesWhite} alt="Arrow Slides White" className='h-[6px]' />
          </div>
        </div>
        
        <div className='pt-10'>
          <div className='flex justify-between'>
            <p className='text-[12px] tracking-normal leading-[21px]'>© 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH</p>
            <div className='flex flex-1 justify-end gap-3'>
              <img src={FacebookWhite} alt="Facebook White" className='opacity-45' />
              <img src={TwitterWhite} alt="Twitter White" className='opacity-45' />
              <img src={InstagramWhite} alt="Instagram White" className='opacity-45' />
              <img src={YoutubeWhite} alt="Youtube White" className='opacity-45' />
            </div>
          </div>
          <div className='flex gap-4 pt-5 pb-10'>
            <p className='text-[12px] tracking-normal text-[#969799]'>Terms of Use</p>
            <p className='text-[12px] tracking-normal text-[#969799]'>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
