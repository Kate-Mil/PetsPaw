import React from 'react';
import Slider from 'react-slick';

const SimpleSlider = ({ breedInfo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {breedInfo.map((info, index) => {
          console.log(info.url);
          return (
            <div key={index}>
              <img
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                src={info.url}
                alt="cat"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
