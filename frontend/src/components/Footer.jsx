import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="text-white pt-5" style={{backgroundColor:'#292525'}}>
      <div className="max-w-5xl  h-[250px]  mx-auto p-2 md:p-4 flex justify-between ">
        <div>
          <ul className="flex flex-col space-y-8">
            <li className="flex  flex-col">
              <div className="flex space-x-2  text-2xl md:text-4xl  ">
                <span className="font-bold text-white ">
                  Site
                </span>
                <span className=" font-bold text-yellow-300">Name</span>
              </div>
              <div className="text-sm md:text-lg">
                <span className=" text-slate-300">
                  keep memories alive
                </span>
              </div>
            </li>
            <li className="flex space-x-1 md:space-x-3">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>siteinfo@gmail.com</span>
            </li>
            <li className="flex space-x-1 md:space-x-3">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span>+941626829763</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="   text-sm md:text-lg flex flex-col space-y-5 mt-2">
            <li>
              <span className=" font-bold text-white ">Home</span>
            </li>
            <li>
              <span className=" font-bold text-white ">
                Terms Of Services
              </span>
            </li>
            <li>
              <span className=" font-bold text-white ">
                Privacy Policy
              </span>
            </li>
            <li>
              <span className=" font-bold text-white ">Help</span>
            </li>
            <li>
              <span className=" font-bold text-white ">About Us</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-5 mt-2 text-sm md:text-lg ">
            <li>
              <span className=" font-bold text-white ">
                Social Media
              </span>
            </li>
            <li className="flex space-x-3">
              <InstagramIcon />
              <span>instagram</span>
            </li>
            <li className="flex space-x-3">
             <FacebookIcon/>
              <span>facebook</span>
            </li>
            <li className="flex space-x-3">
              <TwitterIcon />

              <span>twitter</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black ">
      <div className="max-w-5xl mx-auto text-sm md:text-lg flex justify-between gap-6">
        <span>Copyright © SiteName 2023 | All Rights Reserved.</span>
        <span>Design & Developed by CodeEnvo</span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
