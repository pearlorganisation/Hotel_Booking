import React from "react";

const Staycation = () => {
  const data = [
    {
      img: "https://modtel.travelerwp.com/wp-content/uploads/2022/04/feature-11-450x300.png",
      titile: "TreeHouse Villas",
      address: "California City, CA, USA",
      price: "195,00",
    },
    {
      img: "https://modtel.travelerwp.com/wp-content/uploads/2022/04/feature-21.png",
      titile: "TreeHouse Villas",
      address: "California City, CA, USA",
      price: "205,00",
    },
    {
      img: "https://modtel.travelerwp.com/wp-content/uploads/2022/04/feature-1-2-450x300.png",
      titile: "TreeHouse Villas",
      address: "California City, CA, USA",
      price: "185,00",
    },
    {
      img: "https://modtel.travelerwp.com/wp-content/uploads/2022/04/feature-20-450x300.png",
      titile: "TreeHouse Villas",
      address: "California City, CA, USA",
      price: "185,00",
    },
  ];

  return (
    <>
      <div className="bg-[#F7F8FA] py-24 space-y-10 ">
        <h1 className="text-3xl  font-medium text-center ">
          Plan your next staycation
        </h1>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-10 container">
          {data.map((el, i) => {
            return (
              <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white ">
                <img class="w-full" src={el.img} alt="Hotel Image" />
                <div class="p-4">
                  <h2 class="font-bold text-xl mb-2">{el.titile}</h2>
                  <p class="text-gray-600">{el.address}</p>
                  <div class="flex items-center mt-4">
                    <div class="flex items-center text-yellow-500">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.469 1.804 10.531 1.804 10.951 2.927L12.401 7.083H16.726C17.816 7.083 18.191 8.484 17.352 9.097L13.702 11.714L15.152 15.868C15.572 16.991 14.404 17.896 13.565 17.282L9.916 14.666L6.267 17.282C5.428 17.896 4.26 16.991 4.68 15.868L6.13 11.714L2.48 9.097C1.641 8.484 2.016 7.083 3.106 7.083H7.431L8.881 2.927H9.049Z" />
                      </svg>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.469 1.804 10.531 1.804 10.951 2.927L12.401 7.083H16.726C17.816 7.083 18.191 8.484 17.352 9.097L13.702 11.714L15.152 15.868C15.572 16.991 14.404 17.896 13.565 17.282L9.916 14.666L6.267 17.282C5.428 17.896 4.26 16.991 4.68 15.868L6.13 11.714L2.48 9.097C1.641 8.484 2.016 7.083 3.106 7.083H7.431L8.881 2.927H9.049Z" />
                      </svg>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.469 1.804 10.531 1.804 10.951 2.927L12.401 7.083H16.726C17.816 7.083 18.191 8.484 17.352 9.097L13.702 11.714L15.152 15.868C15.572 16.991 14.404 17.896 13.565 17.282L9.916 14.666L6.267 17.282C5.428 17.896 4.26 16.991 4.68 15.868L6.13 11.714L2.48 9.097C1.641 8.484 2.016 7.083 3.106 7.083H7.431L8.881 2.927H9.049Z" />
                      </svg>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.469 1.804 10.531 1.804 10.951 2.927L12.401 7.083H16.726C17.816 7.083 18.191 8.484 17.352 9.097L13.702 11.714L15.152 15.868C15.572 16.991 14.404 17.896 13.565 17.282L9.916 14.666L6.267 17.282C5.428 17.896 4.26 16.991 4.68 15.868L6.13 11.714L2.48 9.097C1.641 8.484 2.016 7.083 3.106 7.083H7.431L8.881 2.927H9.049Z" />
                      </svg>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927C9.469 1.804 10.531 1.804 10.951 2.927L12.401 7.083H16.726C17.816 7.083 18.191 8.484 17.352 9.097L13.702 11.714L15.152 15.868C15.572 16.991 14.404 17.896 13.565 17.282L9.916 14.666L6.267 17.282C5.428 17.896 4.26 16.991 4.68 15.868L6.13 11.714L2.48 9.097C1.641 8.484 2.016 7.083 3.106 7.083H7.431L8.881 2.927H9.049Z" />
                      </svg>
                    </div>
                    <span class="text-gray-600 ml-2 text-sm">
                      5/5 Excellent (3 Reviews)
                    </span>
                  </div>
                  <div class="mt-4">
                    <span class="font-bold text-xl">
                      From: ${el.price}/night
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Staycation;
