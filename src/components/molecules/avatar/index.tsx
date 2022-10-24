import Image, { ImageProps } from "next/image";
import React, { FC } from "react";

interface AvatarProps {
  img: Omit<ImageProps, "alt">;
}

export const Avatar: FC<AvatarProps> = ({ img }) => {
  return (
    <div className="flex items-center justify-center h-[140px] w-[140px] rounded-full bg-gradient-to-br from-dark-secondary-1 to-dark-secondary-2 ">
      <div className="relative h-[136px] w-[136px] border-[6px] border-solid rounded-full dark:border-dark-primary-2">
        <Image layout="fill" {...img} alt="avatar-image" />
      </div>
    </div>
  );
};
