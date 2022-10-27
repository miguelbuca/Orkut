import { Avatar } from "@components/molecules";
import React, { FC } from "react";
import selo from "@assets/svg/selo.svg";
import selo1 from "@assets/svg/selo-1.svg";
import Image from "next/image";
import Link from "next/link";
import { useMode } from "@hooks/useMode";

export type MenuType = {
  imageURL: string;
  title: string;
  link?: string;
  count?: number;
}[];
export interface AsideProps {
  avatar: string;
  menu: MenuType;
}

export const Aside: FC<AsideProps> = ({ avatar, menu }) => {
  const { mode } = useMode();

  return (
    <div className="flex flex-col rounded-[30px] w-full min-h-[550px] border dark:border-transparent bg-white dark:bg-dark-primary-2 p-[40px]">
      <div className="flex flex-col items-center border-b dark:border-b-dark-primary-5">
        <div>
          <Avatar
            img={{
              src: avatar,
            }}
          />
        </div>
        <div className="mt-[15px] mb-[4px]">
          <div className="flex flex-row items-center">
            <Image src={mode === "dark" ? selo : selo1} alt="selo" />
            <span className="ml-[4px] font-semibold">Jane Doe</span>
          </div>
        </div>
        <div className="flex items-center justify-center mb-[22px] flex-col text-center text-[12pt] text-dark-primary-4">
          <small>feminino, solteiro</small>
          <small>Santana de Parnaíba - Brasil</small>
        </div>
      </div>
      <nav className="flex flex-1 mt-[22px]">
        <ul className="w-full">
          {menu.map(({ imageURL, title, link, count }, index) => {
            return (
              <li className="py-[8px]" key={index}>
                <Link href={link || "#"}>
                  <a className="flex flex-row items-center">
                    <div className="mr-[18px]">
                      <Image
                        height={18}
                        width={18}
                        src={imageURL}
                        alt={"menu-icon"}
                      />
                    </div>
                    <div className="flex-1">{title}</div>
                    {count && (
                      <div className="flex items-center justify-center min-w-[30px] bg-dark-secondary-2 px-[.5rem] rounded-[100px] dark:text-dark-primary-2">
                        <small className="text-white dark:text-inherit">
                          {count}
                        </small>
                      </div>
                    )}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
