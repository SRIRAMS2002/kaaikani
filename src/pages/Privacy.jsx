import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/ContactUs";

const Privacy = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="bg-white">
          <div className="mx-auto py-5 sm:px-6 sm:py-10 lg:px-8">
            <div className="relative isolate overflow-hidden mt-[2rem] bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto  text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  PRIVACY POLICY
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  A privacy policy is implemented because of how businesses
                  handle digital data. It's used to communicate how companies
                  take that information in all cases. Therefore, a privacy
                  policy is a statement describing how a website collects, uses,
                  and manages personal information. A privacy policy can appear
                  in just about any medium as long as it's formally presented to
                  the person or entity owning the personal or applicable
                  information. For example, these agreements could appear in
                  print, on a website, on a computer or mobile device, on a
                  signup form, and so on. Because of the legal implications,
                  users can often request and receive a printed version of a
                  privacy policy.
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
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
