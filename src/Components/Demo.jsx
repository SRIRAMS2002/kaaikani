import React from "react";

const Demo = () => {
  return (
    <div>
      <header>
        <nav class="fixed z-20 w-full bg-white/90  backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100  peer-checked:navbar-active ">
          <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
              <div class="w-full items-center flex justify-between lg:w-auto">
                <a class="relative z-10" href="#" aria-label="logo">
                  <img
                    className="h-24 w-34"
                    src="/Kaaikani.png"
                    alt="Your Company"
                  />
                </a>
                <label
                  for="hbr"
                  class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    class="m-auto h-0.5 w-5 rounded bg-gray-900  transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900  transition duration-300"
                  ></div>
                </label>
              </div>
              <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white  lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none  lg:border-0">
                <div class="text-gray-600  lg:pr-4">
                  <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <a
                        href="#"
                        class="block md:px-4 transition hover:text-primary "
                      >
                        <span>About Us</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="w-full space-y-2 border-primary/10  flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <a
                    href="#"
                    class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span class="relative text-sm font-semibold text-primary ">
                      Contact Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div class="relative pt-40 pb-20 lg:pt-44">
        <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 class="sm:mx-auto sm:max-w-lg sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl ">
            Run successful remote and{" "}
            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 ">
              Hybrid teams
            </span>
            .
          </h1>
          <div class="lg:flex">
            <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p class="sm:text-lg text-gray-700 lg:w-11/12">
                DailyBot takes chat and collaboration to the next level: daily
                standups, team check-ins, surveys, kudos, best companion bot for
                your virtual watercooler, 1:1 intros, motivation tracking and
                more.
              </p>
              <span class="block font-semibold text-gray-500 ">
                The best companion bot for your chat app.
              </span>
            </div>
            <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">

                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
