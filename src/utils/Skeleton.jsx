import React from "react";

const Skeleton = () => {
  // Create array to display loading cards
  const skeletonItems = new Array(6).fill(0);

  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skeletonItems?.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-300 rounded-md p-4 cursor-progress my-5 lg:h-[400px] lg:w-[400px] h-[300px] w-[250px]`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
