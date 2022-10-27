import React from "react";
import logo from "@assets/logo.svg";
import user from "@assets/svg/avatar/user.svg";
import Image from "next/image";
import { HomeLink } from "@components/atoms";
import { SearchInput } from "@components/atoms/input";
import arrowDown from "@assets/svg/arrow-down.svg";

export const Header = () => {
  return (
    <div className="grid gap-[30px] grid-cols-[270px_1fr_270px] py-[40px]">
      <div className="flex justify-center items-center">
        <Image src={logo} alt="orkut-logo" />
      </div>
      <div className="grid gap-[16px] grid-cols-[40px_1fr]">
        <div>
          <HomeLink />
        </div>
        <div className="flex">
          <SearchInput placeholder="Pesquisar no Orkut" />
        </div>
      </div>
      <div className="flex cursor-pointer flex-row items-center justify-end">
        <div className="flex items-center justify-center">
          <Image height={40} width={40} src={user} alt="user-avatar" />
        </div>
        <div className="flex flex-col justify-center min-w-[50%] mx-[8px]">
          <span className="ml-[4px]">Jane Doe</span>
          <small className="text-dark-primary-4 mt-[-.3rem]">@therealjanedoe</small>
        </div>
        <div className="flex items-center justify-center">
          <Image src={arrowDown} alt="arrow-dwon"/>
        </div>
      </div>
    </div>
  );
};
