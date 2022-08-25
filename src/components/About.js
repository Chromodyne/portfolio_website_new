import React from "react";
import headshot from "./about/img/ds-cropped.jpg";

function About() {

    return (
        <div className="grid place-items-center bg-quaternary">
                <div className="row py-0 mt-8 mb-4">
                    <img src={headshot} className="transform max-w-sm rounded-full" alt="Headshot."></img>
                </div>
                <div className="row">
                    <h1 className="text-2xl mb-6 content-center text-primary">About Me</h1>
                </div>
                <div className="row mx-20 text-base max-w-prose mb-10 text-primary bg-tertiary rounded-md px-10 py-5">
                    <p>
                        Greetings! My name is Devin Sinitiere and I am an aspiring software engineer from Las Vegas, NV.
                    </p> 
                    <br></br>    
                    <p>
                        I have been fascinated with computers since I was a young boy. Growing up I spent nearly every waking minute (that my parents allowed) on the computer.
                        Whether it was playing a game, messing with files I shouldn't have been, coding small but amusing programs, or working on mods for the games I loved,
                        computers were, and are to this day, my lifesblood.
                    </p>
                    <br></br>
                    <p> 
                        My interest in computers runs the gamut from software to hardware with my primary passion lying on the low level side of things.
                        I have never one to be subscribe to the phrase "Don't worry about HOW it works, just know that it does."
                        Abstractions, while incredibly useful pedagogically, always left me deeply dissatisified and eventually stoked the embers
                        smouldering in my soul into a roaring bonfire to truly know how computers work on the most fundamental of levels.
                    </p>
                    <br></br>
                    <p>
                    Despite this passion, I spent a signficant portion of my life wandering rather aimlessly coding small things in my free time.
                    Eventually, I returned to school to work towards a B.S. Physics. While I obtained my A.S. in the field, due to financial difficulties
                    I had to put my B.S. on hold to pick up a full-time job. During my free time, I began spending more time coding and rekindled the passion I had for it.
                    </p>
                    <br></br>
                    <p>
                        In 2022 I decided to turn this life-long passion into a viable career path by joining Georgia Tech's 2022 Full-Stack Coding Bootcamp.
                        While I wasn't an utter novice at coding before joining, the web development side of things was always never something I delved into super deeply but also found deeply fascinating.  
                    </p>
                </div>
                         
        </div>
    );
    
}

export default About;