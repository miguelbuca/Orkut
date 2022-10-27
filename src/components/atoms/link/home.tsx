import Link from "next/link";
import React, { FC, HtmlHTMLAttributes } from "react";
import home from "@assets/svg/home.svg";
import Image from "next/image";

export const HomeLink: FC<HtmlHTMLAttributes<HTMLAnchorElement>> = ({
  ...args
}) => {
  return (
    <Link href="#">
      <a {...args}>
        <div className="flex items-center justify-center h-[40px] w-[40px] border bg-white dark:border-dark-primary-3 rounded-full dark:bg-dark-primary-2">
          <Image height={15} width={15} src={home} alt="home-icon" />
        </div>
      </a>
    </Link>
  );
};
