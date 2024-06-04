import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl container mx-auto py-24 space-y-10   grid md:grid-cols-2 gap-1 items-center">
      <div className="w-full h-full">
        <img
          src="https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min-768x517.png"
          alt="Placeholder Image"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="w-full grid grid-flow-row place-content-center p-20 ">
        <div className=" rounded-lg grid items-center md:items-start max-w-5xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Get special offers, and more from Traveler
          </h2>

          <p className="mb-6 text-gray-600  text-center md:px-10">
            Subscribe to see secret deals prices drop the moment you sign up!
          </p>

          <form className="w-full flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-2/3 p-3  rounded-lg mb-4 md:mb-0 md:mr-2 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full md:w-auto p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
