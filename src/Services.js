import React from "react";

const Services = () => {
  return (
    <div className="grid place-items-center py-20">
      <div className="service-txt mx-10">
        <h2 className="text-3xl md:text-4xl mb-10">
          We <span className="text-indigo-800">Only</span> Offer
          <span className="text-indigo-800"> Email Marketing</span>
        </h2>
      </div>
      <div className="service grid place-items-center mb-20 mx-10">
        <h3 className="text-lg md:text-xl leading-8">
          Mastery requires focus, that's why we only do Email Marketing and we
          do it better than anyone else.
        </h3>
        <h3 className="text-lg md:text-xl leading-8">
          We can help boost sales for your business with your existing customers
          and reduce your cart abandonment rate.
        </h3>
      </div>
      <div className="text-lg md:text-xl grid place-items-center">
        <h2 className="text-3xl mx-10">What can we do for you?</h2>
        <div className="list mt-10">
          <ul>
            <li>Email Copywriting</li>
            <li>Email Automations</li>
            <li>Email Campaigns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
