import React from "react";

const About = () => {
  return (
    <div className="grid place-items-center grid-rows-2 mt-72 bg-zinc-50 text-black pt-10 h-full">
      <div className="team grid grid-cols-1 sm:grid-cols-2 gap-24 mb-20">
        <div className="person w-32 h-32 sm:w-28 sm:h-28 sm:ml-5 rounded-full bg-indigo-800">
          <div className="details mt-36 sm:mt-32 grid place-items-center text-lg">
            <h3 className="name">Sulaiman</h3>
            <h4 className="title">Co Founder</h4>
          </div>
        </div>
        <div className="person w-32 h-32 sm:w-28 sm:h-28 sm:ml-5 rounded-full bg-indigo-800">
          <div className="details mt-36 sm:mt-32 grid place-items-center text-lg">
            <h3 className="name">Zoe</h3>
            <h4 className="title">Co Founder</h4>
          </div>
        </div>
        <div className="person w-32 h-32 sm:w-28 sm:h-28 sm:ml-5 rounded-full bg-indigo-800">
          <div className="details mt-36 sm:mt-32 grid place-items-center text-lg">
            <h3 className="name">Developer</h3>
            <h4 className="title">CTO</h4>
          </div>
        </div>
        <div className="person w-32 h-32 sm:w-28 sm:h-28 sm:ml-5 rounded-full bg-indigo-800">
          <div className="details mt-36 sm:mt-32 grid place-items-center text-lg">
            <h3 className="name">Marketer</h3>
            <h4 className="title">CMO</h4>
          </div>
        </div>
      </div>
      <div className="about-us grid place-items-center">
        <h2 className="text-4xl mb-10">Who we are</h2>
        <p className="mx-5 sm:mx-20 lg:mx-36">
          We at MCnB are a team that specializes in Email Marketing for
          E-commerce and Info Product businesses
        </p>
      </div>
    </div>
  );
};

export default About;
