import React, { FC } from "react";
import Image from "next/image";
import selo from "@assets/svg/selo.svg";
import selo1 from "@assets/svg/selo-1.svg";
import { useMode } from "@hooks/useMode";

export type GroupItemType = {
  img: string;
  name: string;
  useSelo?: boolean;
};

export interface GroupCardProps {
  title: string;
  length: number;
  data: GroupItemType[];
}

export const GroupCard: FC<GroupCardProps> = ({ title, length, data }) => {
  const { mode } = useMode();

  return data.length > 0 ? (
    <div className="w-full rounded-[30px] border dark:border-transparent bg-white dark:bg-dark-primary-2 p-[40px]">
      <div className="flex flex-row items-center">
        <span className="flex-1">
          <small>
            <strong>{title}</strong>
          </small>
        </span>
        <span>
          <small className="text-dark-secondary-2">Ver todos ({length})</small>
        </span>
      </div>
      <div className="h-full grid grid-cols-3 grid-rows-3 gap-[15px] mt-[18px]">
        {data.map(({ name, img, useSelo }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              <Image
                height={50}
                width={50}
                className="rounded-full"
                src={img}
                alt="avatar"
              />
              <div className="absolute left-[18px] bottom-[-9px]">
                {useSelo && (
                  <Image src={mode === "dark" ? selo : selo1} alt="selo" />
                )}
              </div>
            </div>
            <div>
              <span className="text-center text-[10px] whitespace-nowrap">
                {name}
              </span>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center">
          <strong className="cursor-pointer text-dark-secondary-2">...</strong>
        </div>
      </div>
    </div>
  ) : null;
};
