import React, { FC, HtmlHTMLAttributes } from "react";
import search from '@assets/svg/search.svg';
import Image from "next/image";

export const SearchInput: FC<HtmlHTMLAttributes<HTMLInputElement>> = ({
  ...args
}) => {
  return (
    <div className="relative flex flex-1">
      <div className="absolute pl-[10px] py-[10px]">
        <Image height={18} width={18} src={search} alt="search-icon"/>
      </div>
      <input
        className="px-[42px] placeholder:text-dark-primary-4 h-[40px] text-[14px] outline-none w-full border bg-white dark:border-dark-primary-3 rounded-full dark:bg-dark-primary-2"
        {...args}
      />
    </div>
  );
};
