import React from "react";

const Services = () => {
  return (
    <div id="Services">
      <div class="py-5">
        <div class="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div>
          <div className="mt-10  flex items-center mx-5 gap-x-4">
        <div className="h-px flex-auto flex bg-gray-700" />
              <h4 className=" text-2xl md:text-4xl font-bold  text-center leading-6 text-gray-900"> Services{" "}</h4>
              <div className="h-px flex-auto bg-gray-700" />
            </div>
          </div>
          <div class="mt-10 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div class="group relative bg-white dark:bg-gray-600 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="/Services/trolley.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                  Shop Again with Precision
                  </h5>
                  <p class="text-md text-gray-600 dark:text-gray-300">
                    Shop a diverse range of handpicked vegetables, juicy fruits,
                    and pre-chopped ingredients, making your cooking experience
                    a breeze!
                  </p>
                </div>
              </div>
            </div>
            <div class="group relative bg-white dark:bg-gray-700 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="/Services/fast-delivery.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                  Order Fulfillment
                  </h5>
                  <p class="text-md text-gray-600 dark:text-gray-300">
                    Enjoy swift and reliable deliveries, making your shopping
                    hassle-free as we promptly bring farm goodness to your
                    kitchen.
                  </p>
                </div>
              </div>
            </div>
            <div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8">
                <img
                  src="/Services/login.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                  Hassle-Free Transactions
                  </h5>
                  <p class="text-md text-gray-600 dark:text-gray-300">
                    Shop confidently at Kaaikani! Our secure payment gateways
                    guarantee safe transactions, coupled with a user-friendly
                    interface for a seamless checkout process, ensuring an
                    effortless and enjoyable shopping experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img
                  src="/Services/sustainability.png"
                  class="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl font-medium  dark:text-white transition group-hover:text-primary">
                  Eco-friendly initiatives
                  </h5>
                  <p class="text-md text-gray-600 dark:text-gray-300">
                    Satisfy your cravings with Kaaikani's refreshing and
                    nutritious juices, offering a blend of classic and exotic
                    flavors while championing sustainability through
                    eco-friendly packaging and support for local farmers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
