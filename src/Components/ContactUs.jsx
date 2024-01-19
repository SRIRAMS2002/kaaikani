import React from 'react'

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
const Footer = () => {
  return (
    <div >
      
      <footer>
  
  <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:pt-24 lg:pt-10">

<div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            "We're just a message away from turning your questions into solutions."
            </p>
            <div className='flex mt-5 space-x-3 items-center '>
           <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className=" font-semibold text-md text-white">kaaikanionline@gmail.com</dt>
           </div>

           <div className='flex mt-5 space-x-3 items-center '>
           <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className=" font-semibold text-md text-white">+91 9677586302</dt>
           </div>
          

          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
            <div className="p-5 w-48 text-white">
            <div className="text-lg uppercase text-gray-500 font-medium"></div>
            <a className="my-3 text-lg block" href="/Founders">
              About Us 
            </a>
            
            <a className="my-3 text-lg block" href="/Mentors">
              Service
            </a>
            <a className="my-3 text-lg block" href="/Members">
              Contact Us
            </a>
           
           
           
          </div>
              
            </div>
            <div className="flex flex-col items-start">
            <div className="p-5 w-48 text-white">
            <div className="text-md  text-gray-500 font-medium">Available on</div>
           
            
            <a className="my-3 block" href="https://play.google.com/store/apps/details?id=com.kaaikani.kaaikani&pli=1" target="_blank">
           <img src="/GooglePlayStore.svg" alt="" />
            </a>

            <a className="my-3 block" href="https://play.google.com/store/apps/details?id=com.kaaikani.kaaikani&pli=1" target="_blank">
           <img src="/apple-app-store-badge.svg" className='w-full' alt="" />
            </a>
           
          </div>
              
            </div>
         
          </dl>
        </div>
      </div>
     
{/* Footer Section */}
      <div class="w-full mx-auto  my-5 max-w-7xl justify-around text-sm pt-6  flex flex-wrap gap-y-6 gap-4 items-center md:justify-between dark:border-white/10">
           
            <div class="order-2 sm:order-1 flex items-center gap-3 text-gray-900/50 dark:text-white/50">
                
                <span class="w-48 block pt-1">
                   © Kaaikani 2008 - 2024
                </span>
            </div>
            <div class="order-first sm:order-2 flex flex-wrap justify-center gap-y-2 gap-x-4 text-gray-500">
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/srit_mechatrons_/">Terms and Conditions</a>
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@mechatronssrit902">Privacy Policies</a>

                
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" href="/contact">Contact</a>
            </div>
           
        </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 0.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        
      
    </div>
</footer>
                                    
    </div>
  )
}

export default Footer