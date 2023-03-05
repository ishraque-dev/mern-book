import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import FriendRequestCard from './FriendRequestCard';
import SmallCard from './SmallCard';

function MediumCard() {
  return (
    <>
      <div className="block md:hidden ">
        <SmallCard
          Icon={FaUserFriends}
          title="Requests"
          description="See all Friends"
        />
      </div>
      <div className="hidden md:block">
        <div className="h-64 w-64  rounded-lg bg-[#F1F2F7] p-3">
          {[...Array(10).keys()].slice(0, 3).map((item) => (
            <FriendRequestCard
              image="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              name="Sera Smith"
              date="Two weeks ago"
            />
          ))}
        </div>
        <div>
          <button>See more</button>
        </div>
      </div>
    </>
  );
}

export default MediumCard;
