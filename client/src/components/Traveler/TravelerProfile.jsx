import React, { useState } from "react";
import {
  FaPhone,
  FaIdCard,
  FaCertificate,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

const TravelerProfile = () => {
  const [activeTab, setActiveTab] = useState("HOTELS");

  const hotelData = [
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2017/06/79746510-450x300.jpg",
      name: "Hyatt Centric Times Square",
      address: "Virginia, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: "from $264,00 /night",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2017/06/36758163-450x300.jpg",
      name: "Hotel WBF Hommachi",
      address: "Ohio, USA",
      review: "1.6 /5 Poor 1 Review",
      price: "from $350,00 /night",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2015/02/32087410-450x300.jpg",
      name: "Castello Casole Hotel",
      address: "New York City, NY, USA",
      review: "3.3 /5 Very Good 2 Reviews",
      price: "from $50,00 /night",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2014/12/74264099-450x300.jpg",
      name: "Hotel Stanford",
      address: "Boston, MA, USA",
      review: "1.8 /5 Poor 1 Review",
      price: " from $39,00/night",
    },
  ];

  const tours = [
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2017/06/alexei-scutari-481455-unsplash-450x300.jpg",
      name: "New York: Museum of Modern Art",
      address: "New York, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: " Full day from $1.000,00",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2017/06/TheCommonWanderer_-450x300.jpg",
      name: "Hyatt Centric Times Square",
      address: "Virginia, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: "from $264,00 /night",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2017/06/slide-faqs-450x300.jpg",
      name: "American Parks Trail end Rapid City",
      address: "Virginia, USA",
      review: "Nevada, American",
      price: "from $264,00 /night",
    },
  ];

  const activity = [
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2017/06/32475-450x300.jpg",
      name: "New York: Museum of Modern Art",
      address: "New York, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: " Full day from $1.000,00",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2019/01/1200_Winter2hSnowmobiling3-1200x800-1-1200x800-450x300.jpg",
      name: "Hyatt Centric Times Square",
      address: "Virginia, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: "from $264,00 /night",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2019/01/canoe_tour-450x300.jpg",
      name: "Hyatt Centric Times Square",
      address: "Virginia, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: "from $264,00 /night",
    },
  ];

  const car = [
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2019/04/car-pictures.cars_.com_-6-760x460.jpg",
      name: "Land Rover Evoque",
      address: "New York, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: " Full day from $1.000,00",
    },
    {
      img: "https://mixmap-elementor.travelerwp.com/wp-content/uploads/2019/04/car-pictures.cars_.com_-11-760x460.jpg",
      name: "Mitsubishi Outlander",
      address: "Virginia, USA",
      review: "4.2 /5 Excellent 4 Reviews",
      price: "from $264,00 /night",
    },
  ];

  const renderContent = () => {
    let data;
    switch (activeTab) {
      case "HOTELS":
        data = hotelData;
        break;
      case "TOURS":
        data = tours;
        break;
      case "ACTIVITY":
        data = activity;
        break;
      case "CAR":
        data = car;
        break;
      default:
        data = hotelData;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((el, i) => (
          <div key={i} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={el.img} alt="Hotel" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{el.name}</h3>
            <p className="text-gray-600">{el.address}</p>
            <p className="text-yellow-500">{el.review}</p>
            <p className="text-gray-800 font-semibold">{el.price}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap bg-gray-100 min-h-screen container">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-white shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://mixmap-elementor.travelerwp.com/wp-content/uploads/2020/01/pp_1-200x200.png"
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Traveler</h2>
          <p className="text-gray-600">212 Reviews</p>
          <p className="text-gray-600">Member since Nov 28, 2018</p>
          <div className="mt-4">
            <p>
              <strong>Home Airport:</strong> Ha Noi
            </p>
            <p>
              <strong>Address:</strong> Test, Test, India
            </p>
          </div>
          <div className="mt-4 w-full">
            <h3 className="text-lg font-semibold">Verifications</h3>
            <ul className="list-none">
              <li className="flex items-center mt-2">
                <FaPhone className="text-green-500 mr-2" /> Phone number
              </li>
              <li className="flex items-center mt-2">
                <FaIdCard className="text-green-500 mr-2" /> ID Card
              </li>
              <li className="flex items-center mt-2">
                <FaCertificate className="text-green-500 mr-2" /> Travel
                Certificate
              </li>
              <li className="flex items-center mt-2">
                <FaEnvelope className="text-green-500 mr-2" /> Email
              </li>
              <li className="flex items-center mt-2">
                <FaCheckCircle className="text-green-500 mr-2" /> Social media
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <div className="mb-4">
          <ul className="flex space-x-4 cursor-pointer">
            <li
              className={`${
                activeTab === "HOTELS" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("HOTELS")}
            >
              HOTELS
            </li>
            <li
              className={`${
                activeTab === "TOURS" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("TOURS")}
            >
              TOURS
            </li>
            <li
              className={`${
                activeTab === "ACTIVITY" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("ACTIVITY")}
            >
              ACTIVITY
            </li>
            <li
              className={`${
                activeTab === "CAR" ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("CAR")}
            >
              CAR
            </li>
            <li>RENTAL</li>
          </ul>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default TravelerProfile;
