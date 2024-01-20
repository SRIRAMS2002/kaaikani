import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Navbar from '@/Components/Navbar'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number:"",
    message: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_1ck77v3',
        'template_pizf5uw',
        {
          from_name: form.name,
          to_name: "Kaaikani",
          from_email: form.email,
          to_email: "kaaikanionline@gmail.com",
          from_number: form.number,
          message: form.message,
        },
        'oY9bifZAvL_QPid2n'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            number:"",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className="isolate  bg-gray-900 text-white px-6 lg:px-8">
     <Navbar  />
   
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
     
      <div className="mx-auto pt-[8rem] max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400/75">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#"   ref={formRef}
          onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div  className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-300/70">
             Your  Name
            </label>
            <div className="mt-2.5">
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm  shadow-indigo-300  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
            </div>
          </div>
          
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300/70">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm  shadow-indigo-300  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-300/70">
              Phone number
            </label>
            <div className="relative mt-2.5">
              
              <input
                type="tel"
                name="number"
                id="number"
                value={form.number}
                onChange={handleChange}
                placeholder="What's your number?"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm  shadow-indigo-300  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300/70">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={form.message}
              onChange={handleChange}
                rows={4}
                placeholder='How may I assist you?'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm  shadow-indigo-300  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "Sending..." : "Let's Talk"}
          </button>
        </div>
      </form>
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
     
      {/* Footer Section */}
      <div class="w-full mx-auto mt-10 my-5 max-w-7xl justify-around text-sm pt-6  flex flex-wrap gap-y-6 gap-4 items-center md:justify-between dark:border-white/10">
            <div class="order-2 sm:order-1 flex items-center gap-3 text-gray-900/50 dark:text-white/50">
                
                <span class="w-48 block pt-1">
                   © Kaaikani 2008 - 2024
                </span>
            </div>
            <div class="order-first sm:order-2 flex flex-wrap justify-center gap-y-2 gap-x-4 text-gray-500">
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" rel="noopener noreferrer" href="/Terms">Terms and Conditions</a>
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" rel="noopener noreferrer" href="/Privacy">Privacy Policies</a>

                
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" href="/ContactUs">Contact</a>
            </div>
           
        </div>
      
    </div>
    </div>
  )
}

export default ContactUs
