import React from 'react';

function FriendRequestCard({ image, name, date }) {
  return (
    <div className="mt-2 flex h-auto border-b ">
      <div className="w-20">
        <img
          src={image}
          alt="profile"
          className="h-14 w-14 rounded-full object-cover"
        />
      </div>
      <div className="w-32">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="mb-2 flex flex-col gap-2 text-right">
        <button className="rounded-lg bg-[#166FE5] px-2 py-1 text-sm text-white">
          Accept
        </button>
        <button className="rounded-lg bg-red-600 px-2 py-1 text-sm text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default FriendRequestCard;
