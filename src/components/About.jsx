import React from "react";
import flp from "../assets/videos/flp.mp4";
import { Player } from 'video-react';
import profilepic from "../assets/images/sudha.jpg"
import Typed from "react-typed"


const about = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center">
        {/* <video controls autoplay controlslist="nodownload">
          <source src={flp} type="video/mp4" />
        </video> */}
        {/* <img></img> */}
        <div className="mt-20 bg-amber-500 text-dark p-5">
          <p className="text-center  text-5xl">About Me</p>
          <div className="flex text-center justify-around">
            <div className="flex  flex-col text-center md:flex-row p-5">
              <div className="pr-5 m-10">
                {/* { <img src={profilepic} alt="BigCo Inc. logo" />} */}
                { <img src={profilepic} class="rounded float-start" alt="..."></img> }
                
               </div>
              
           
                <p className="text-3xl"  >T Sudhakar Reddy</p>
                
              

              <div className="m-10" className="grid gap-y-10">
              <p className="text-2xl">
              <Typed 
                  strings={[
                    " I am an Entrepreneur",
                    "I am a Service Minded",
                    "I am an Opportunistic",
                    "I am  a Passionate"

                  ]}
                  typeSpeed={90}
                  backSpeed={50}
                  loop
                />
              </p>
                
                        {/* <div class="space-y-[5px]">
        <!-- ... -->
        </div> */}
        {/* <div class="space-y-[5px]">
                </div> */}
                <p className="text-1xl">  I could able to get 20k per month after a continuous service of 14 years in a job, but no time freedom and financial
          freedom.The opportunity i got in 2015 made me millionaire within one year, multimillionaire by next year,and earned 1 crore
          with in 5 years.I want to extend the opportunity to the people with passion.
          "Change Your Life Today Act Now Without Any Delay"</p>
                
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        <button className="btn btn-active btn-info ">
          <a href="https://youtu.be/z7gw37NurOI"> Register for this opportunity</a>
        </button>
      </div>
    </div>
    </div >
  );
};

export default about;
