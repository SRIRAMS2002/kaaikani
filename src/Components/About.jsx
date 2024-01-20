import React from "react";

const About = () => {
  return (
    <div id="About">
      <div class="py-12 sm:py-20 ">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div class="bg-gray-50 shadow-lg dark:lg:bg-darker lg:p-5 rounded-[2.5rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div class="md:5/12 lg:w-1/2">
              <img
                src="/About-us.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 mx-3.5 py-3.5  lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-900 md:text-4xl ">
                Discover a healthier lifestyle with  <span className="text-green-600">
                Kaaikani
                </span>
              </h2>
              <p className="my-8 text-lg text-gray-800 ">
                Your ultimate app for freshness. We take pride in bringing you
                the finest vegetables, fruits, and fresh juices, all delivered
                right to your doorstep. 
              </p>
              <p  className="my-8 text-lg text-gray-800 ">
              Your go-to app for the finest
                vegetables, fruits, and fresh juices, delivered to your
                doorstep. Embrace a healthier way of living where convenience
                meets nutrition, all at the tap of your fingertips.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
