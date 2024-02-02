import React from "react";

function Card({data}) {
 
  return (


    <>

{data.map((item,index)=>(
    <div
    key={index}
    className="max-w-5xl mx-auto pl-4 md:pl-11 py-16 rounded-2xl text-white flex  flex-col md:flex-row my-5"
    style={{ backgroundColor: "#292525" }}
  >
    {/* <div className="bg-white md:flex-1 rounded-2xl md:mr-4 md:h-68 md:w-96 ">h</div> */}
    <img
src={item.img}
className="bg-white md:flex-1 rounded-2xl md:mr-4 md:h-68 md:w-96" alt=""/>
    <div className="flex-1 md:px-16 mt-4 md:mt-0 md:space-y-3 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">orbituary</div>
        <div className="flex gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </span>
          <span>{item.date}</span>
          <span>|</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </span>
          <span>{item.comment} Tributes</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span>Mr Hxcdfrghdf Dehbbdfg</span>
        <span>{item.live}</span>
        <span>{item.place}</span>
        <span>{item.area}</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore.
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <button className="text-white font-bold border border-yellow-300 px-4 py-2 rounded-lg mt-2 md:mt-0 md:mr-2">
          View More
        </button>
        <button className="text-white font-bold border border-yellow-300  px-4 py-2 rounded-lg mt-2 md:mt-0 md:mr-2">
          Share
        </button>
        <button className="text-white font-bold border  border-yellow-300  px-4 py-2 rounded-lg mt-2 md:mt-0">
          Tribute
        </button>
      </div>
    </div>
  </div>
))}


    </>




  )

 
}

export default Card;
