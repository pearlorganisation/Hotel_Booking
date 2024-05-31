import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-slate-200 ">

    <div className=" grid container py-2  ">
        <div className="bg-blue-400 h-40 gap-4 rounded-xl flex flex-col items-center justify-center">
        <p className="p-1  px-4 tracking-widest font-semibold border bg-white rounded-lg text-blue-400 ">
          WRITE TO US
        </p>
        <p className="font-light text-5xl  text-white">Get In Touch</p>
      </div>

      <div className="grid md:grid-cols-2   my-6 gap-4   justify-between">
        {/* personal details section */}
        <section className="grid  p-4 bg-opacity-55 shadow-lg rounded-lg border border-white border-opacity-18">
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white bg-blue-400 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </section>

        {/* Companies contact detail section  */}
        <div className=" grid  p-4 bg-opacity-55 shadow-lg rounded-lg border border-white border-opacity-18 overflow-hidden">
          {/* image section */}
          <div className="overflow-hidden rounded-2xl border  flex justify-center items-center">
            <img
              src="contactUs.jpg"
              alt="Contact Us Img"
              className="h-full w-full"
            />
          </div>

          <div className="grid  my-5 items-center">
            <div>
              <div className="flex p-2 gap-4">
                <p className="p-2 bg-opacity-55 shadow-lg rounded-lg border border-white border-opacity-18">
                  <MdOutlineEmail className="text-blue-400" size={32}/>
                </p>
                <div>
                <h1 className="font-semibold">Quick Contact</h1>
                    <p>shashankn@gmail.com</p>
                  </div>
              </div>

              <div className="flex p-2 gap-4">
                <p className="p-2 bg-opacity-55 shadow-lg rounded-lg border border-white border-opacity-18">
                  <FaPhone className="text-blue-400" size={30}/>
                </p>
                <div>
                    <h1 className="font-semibold">Phone Number</h1>
                    <p>12345678</p>
                  </div>
              </div>


              <div className="flex p-2 gap-4">
                <p className="p-2 bg-opacity-55 shadow-lg rounded-lg border border-white border-opacity-18">
                  <MdOutlineLocationOn className="text-blue-400" size={32}/>
                </p>
                <div>
                <h1 className="font-semibold">Headquarter</h1>

                    <p>Naal Pada , Delhi</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Contact;
