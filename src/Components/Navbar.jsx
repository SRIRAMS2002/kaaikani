import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About Us', href: '/#About', current: true },
  { name: 'Services', href: '/#Services', current: false },
  { name: 'ContactUs', href: '/ContactUs', current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav" className="fixed z-10 inset-x-0 bg-white py-2.5 shadow-lg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <a href="/">
                  <img
                    className="h-36 w-28"
                    src="/Kaaikani.png"
                    alt="Your Company"
                  />
                  </a>
              
                </div>
                <div className="hidden md:flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'text-green-600'
                          : 'text-gray-800 hover:text-green-400',
                        'px-3 py-2 text-lg font-semibold'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                    <a href="https://play.google.com/store/apps/details?id=com.kaaikani.kaaikani&pli=1" target="_blank">
                  <img className='h-12 w-auto' src="/GooglePlayStore.svg" alt="" />
                </a>
                </div>
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="text-gray-400 hover:text-white focus:outline-none">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2  pb-3 space-y-1">
                <div className='flex flex-col text-center'>
                  
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                    
                      item.current
                      ? 'text-green-600'
                      : 'text-gray-800 hover:text-green-400',
                    'px-3 py-2 text-lg font-semibold'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                </div>
                <hr className='mx-10'/>
               
                <a href="https://play.google.com/store/apps/details?id=com.kaaikani.kaaikani&pli=1" >
                  <img className='h-12 w-auto mt-5 justify-center mx-auto' src="/GooglePlayStore.svg" alt="" />
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
