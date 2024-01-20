import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/ContactUs'
const Terms = () => {
  return (
    <div>
        <Navbar/>
        <div className="bg-white">
      <div className="mx-auto py-5 sm:px-6 sm:py-10 lg:px-8">
        <div className="relative isolate overflow-hidden mt-[2rem] bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto  text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            TERMS & CONDITION
            
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Kaaikani application is an online sales of fresh fruits and vegetables. The customer can order their needs through kaaikani application the previous day, and delivery will be made the next day on their doorstep. We care about privacy and security of your personnel information. Collecting and using your Personnel Data Login and Password: Kaakani Application asks for the Customer to create Account. Login and Password are asked for security purpose. Each individual customer has their own login and Password. Address: Kaaikani Application collect address to Deliver the products at the customer doorstep. Bank Details: Kaaikani Application collect Bank Details of the Customer to allow payment through online using Credit cards, Debit cards, Gpay, Phonepe, internet Banking. We do not share your personnel Data with anyother third Party without your permission. Children's Privacy our application do not address any one under the age of 13. we do not collect any Personnel information from children through our application. We may update our policy time to time. we will notify you of any changes by posting the new privacy policy on this page.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
          
            </div>
          </div>
        
        </div>
      </div>
    </div>
        <Footer/>
      
    </div>
  )
}

export default Terms
