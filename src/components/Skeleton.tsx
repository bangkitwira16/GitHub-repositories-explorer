import React from "react";
import { Skeleton as SkeletonComponent } from "@mui/material";

interface ISkeleton {
  height: number;
}

const Skeleton = (props: ISkeleton) => {
  return (
    <div>
      {Array(3)
        .fill(null)
        .map((val, index) => (
          <SkeletonComponent
            key={index}
            variant="rectangular"
            className="w-full mb-2"
            height={props.height}
          />
        ))}
    </div>
  );
};

export default Skeleton;
