import { Avatar } from "@components/molecules";
import React from "react";
import userImage from '@assets/svg/avatar/user.svg';

export const Aside = () => {
  return (
    <div className="flex flex-col rounded-[30px] w-full min-h-[500px] dark:bg-dark-primary-2 p-[40px]">
      <div className="flex flex-col items-center border-b dark:border-b-dark-primary-5">
        <div>
          <Avatar img={{
            src: userImage
          }}/>
        </div>
        <div>
          ola mundo
        </div>
      </div>
      <div className="flex flex-1">ola mundo</div>
    </div>
  );
};
