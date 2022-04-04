import emailHero from "./images/undraw_message_sent_re_q2kl.svg";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center h-80">
      <div className="main-title text-3xl md:text-4xl bold grid place-items-start mx-10 md:mx-0 md:place-items-start mt-44 md:mt-48 md:ml-24 md:gap-y-2">
        <h1 className="leading-10">
          We help boost your sales through Email Marketing
        </h1>
        <div className="mt-5">
          <a className="text-sm md:text-lg bg-indigo-800 p-3 rounded-lg">
            Book A Call Now!
          </a>
        </div>
      </div>
      <div className="hero-image w-80 mt-44 invisible md:visible">
        <img src={emailHero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
