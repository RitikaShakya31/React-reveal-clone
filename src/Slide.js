import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bubbles from "./images/bubbles.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";
import dog from "./images/dog.png";
import nature from "./images/nature.jpg";
import waterfall from "./images/waterfall.jpg";
import cloud from "./images/cloud.jpg";


const Slide = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => {
      // Show "Your Welcome" slide after the first two slides
      if (current === 1) {
        setShowWelcome(true);
      }
    },
  };

  return (
    <div className="h-[300px] md:w-full">
      <Slider {...settings}>
        <div className="relative h-[300px] bg-blue-900">
          <Fade left cascade>
            <span className="absolute lg:left-[600px] top-32 text-white text-6xl sm:left-[200px]">
              Hello Everyone
            </span>
          </Fade>
        </div>
        <div className="h-[200px] md:w-full">
          <img src={bubbles} alt="bubbles" />
          </div>


        {showWelcome && (

          <div className="h-[300px]">
            <img src={nature} alt="" />
           
</div>
        )}
         <div className="h-[300px] relative">
         <img src={waterfall} alt="" /></div>
        <div className="h-[300px] relative">
        <img src={cloud} alt="" />

        </div>
        
        
      </Slider>

      <div className="m-5 top-[550px]">
        The traditional way of calling attention to a certain web page elements
        has been "in-your-face" method of placing it in a popup or putting them
        in a sticky navigation elements like sticky headers, footers or
        sidebars. As the number of such elements increase, the app is at danger
        of starting to resemble a control panel from a jumbo jet cockpit. There
        should be a better way of managing a user attention and React Reveal can
        do just that. Instead of trying to squeeze everything that requires
        attention into one screen, you can draw user attention to important bits
        as they scroll past. <br /> React Reveal provides a dead simple way to
        add cool reveal-on-scroll animations to your React app. In addition, it
        has a first class support for collapsing elements thereby abolishing the
        need for the universally hated popups. The other problem many single
        page applications are facing is actually their speed. As you add and
        remove elements from the page transitions are often rough and jerky.
        React Reveal rich suite of effects could really smoothen these
        transitions to make for a modern and polished user experience. React
        Reveal is MIT licensed, supports server side rendering, has excellent
        cross browser support, won't mess your SEO, compatible with react
        transition group and has a tiny footprint in the application js bundle (
        doesn't require any CSS files either ). In order to start using it have
        a look at the documentation.
      </div>

      <div className="mt-20 hover:underline">
        <label className="text-blue-600 text-3xl lg:ml-[680px] mt-24 sm:ml-[370px]" htmlFor="">
          <b>Fade Effect</b>{" "}
        </label>
      </div>
      <div className="w-[300px] space-y-5 lg:ml-[600px] mt-20 sm:ml-[300px]">
        <Fade left>
          <img src={dog} alt="dog" />
        </Fade>
        <Fade right>
          <img src={dog} alt="dog" />
        </Fade>
        <Fade top>
          <img src={dog} alt="dog" />
        </Fade>
        <Fade bottom>
          <img src={dog} alt="dog" />
        </Fade>
      </div>


      <div className="mt-20 hover:underline">
        <label className="text-blue-600 text-3xl lg:ml-[680px] mt-24 sm:ml-[370px]" htmlFor="">
          <b>Zoom Effect</b>{" "}
        </label>
      </div>
      <div className="w-[300px] space-y-5 lg:ml-[600px] mt-20 sm:ml-[300px]">
        < Zoom left>
          <img src={dog} alt="dog" />
        </Zoom>
        <Zoom right>
          <img src={dog} alt="dog" />
        </Zoom>
        <Zoom top>
          <img src={dog} alt="dog" />
        </Zoom>
        <Zoom bottom>
          <img src={dog} alt="dog" />
        </Zoom>
      </div>

      <div className="mt-20 hover:underline">
        <label className="text-blue-600 text-3xl lg:ml-[680px] mt-24 sm:ml-[370px]" htmlFor="">
          <b>Roll Effect</b>{" "}
        </label>
      </div>
      <div className="w-[300px] space-y-5 lg:ml-[600px] mt-20 sm:ml-[300px]">
        < Roll left>
          <img src={dog} alt="dog" />
        </Roll>
        <Roll Rollright>
          <img src={dog} alt="dog" />
        </Roll>
        <Roll top>
          <img src={dog} alt="dog" />
        </Roll>
        <Roll bottom>
          <img src={dog} alt="dog" />
        </Roll>
      </div>

      <div className="mt-20 hover:underline">
        <label className="text-blue-600 text-3xl lg:ml-[630px] mt-24 sm:ml-[370px]" htmlFor="">
          <b>LightSpeed Effect</b>{" "}
        </label>
      </div>
      <div className="w-[300px] space-y-5 lg:ml-[600px] mt-20 sm:ml-[300px]">
        < LightSpeed left>
          <img src={dog} alt="dog" />
        </LightSpeed>
        <LightSpeed right>
          <img src={dog} alt="dog" />
        </LightSpeed>
        <LightSpeed top>
          <img src={dog} alt="dog" />
        </LightSpeed>
        <LightSpeed bottom>
          <img src={dog} alt="dog" />
        </LightSpeed>
      </div>



      <div className="mt-20 hover:underline">
        <label className="text-blue-600 text-3xl lg:ml-[650px] mt-24 sm:ml-[370px]" htmlFor="">
          <b>Rotate Effect</b>{" "}
        </label>
      </div>
      <div className="w-[300px] space-y-5 lg:ml-[600px] mt-20 sm:ml-[300px]">
        <Rotate left>
          <img src={dog} alt="dog" />
        </Rotate>
        <Rotate Rollright>
          <img src={dog} alt="dog" />
        </Rotate>
        <Rotate top>
          <img src={dog} alt="dog" />
        </Rotate>
        <Rotate bottom>
          <img src={dog} alt="dog" />
        </Rotate>
      </div>

      <div className="mt-20 hover:underline">
        <label className="text-blue-600 text-3xl lg:ml-[650px] mt-24 sm:ml-[370px]" htmlFor="">
          <b>Bounce Effect</b>{" "}
        </label>
      </div>
      <div className="w-[300px] space-y-5 lg:ml-[600px] mt-20 sm:ml-[300px]">
        <Bounce left>
          <img src={dog} alt="dog" />
        </Bounce>
        <Bounce Rollright>
          <img src={dog} alt="dog" />
        </Bounce>
        <Bounce top>
          <img src={dog} alt="dog" />
        </Bounce>
        <Bounce bottom>
          <img src={dog} alt="dog" />
        </Bounce>
      </div>






    </div>
  );
};

export default Slide;
