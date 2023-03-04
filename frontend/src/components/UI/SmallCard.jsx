import React from 'react';

function SmallCard({ image, Icon, title, description }) {
  return (
    <div className="flex w-[50%] cursor-pointer flex-col rounded-xl bg-[#F1F2F7] p-3 transition duration-150 ease-linear hover:bg-[#E8F9FD]">
      <div className="flex items-center justify-center md:justify-start">
        {image ? (
          <img src={image} />
        ) : (
          <Icon className="mr-2  text-2xl text-[#3C4048]" />
        )}
        <h3 className="hidden text-gray-800 md:block">{title}</h3>
      </div>
      <div className="ml-8 hidden text-sm text-gray-500 lg:block">
        {description && <h5>{description}</h5>}
      </div>
    </div>
  );
}

export default SmallCard;
