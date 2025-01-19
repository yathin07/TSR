import React from "react";
import flp from "../assets/videos/flp.mp4";
import { Player } from 'video-react';
import profilepic from "../assets/images/sudha.jpg"
import Typed from "react-typed"


const Video = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center">
        <video controls autoplay controlslist="nodownload">
          <source src={flp} type="video/mp4" />
        </video>
{/*         {/* <img></img> */}
        <div className="mt-20 bg-black text-white p-5">
          <p className="text-center text-5xl">About Me</p>
          <div className="flex text-center justify-around">
            <div className="flex  flex-col text-center md:flex-row p-5">
              <div className="pr-5 m-10">
                <img src={profilepic} alt="BigCo Inc. logo" />
              </div>

              <div className="m-10">
                <Typed
                  strings={[
                    " I am a good programmer",
                    "I Love Software Development",
                    "I Love All My Subscribers",
                  ]}
                  typeSpeed={90}
                  backSpeed={50}
                  loop
                />
                <p className="text-3xl">Financial Freedom to fulfill your dreams</p>
                <p>
                  This opportunity makes the ordinary person to become a Millionaire. So, you can fulfill your and your family dreams.
                </p>
                <p>
                  hii good morning
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        <button className="btn btn-active btn-info ">
          <a href="tsudhakarreddy.in"> Register for this opportunity</a>
        </button>
      </div> */}
    </div>
    </div >
  );
};

export default Video;
