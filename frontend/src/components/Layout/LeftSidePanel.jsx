import React from 'react';
import { SmallCard } from '../UI';
import { FaUserFriends, FaPager } from 'react-icons/fa';

function LeftSidePanel() {
  return (
    <div className="flex h-[500px] w-[25%] flex-col gap-3">
      <SmallCard
        Icon={FaUserFriends}
        title="Friends"
        description="See all Friends"
      />
      <SmallCard Icon={FaPager} title="Pages" description="All Pages" />
    </div>
  );
}

export default LeftSidePanel;
