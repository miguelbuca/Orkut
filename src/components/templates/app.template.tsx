import { Aside, Header } from "@components/organisms";
import React, { FC, HTMLAttributes } from "react";

export const AppTemplate: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="fixed flex flex-col w-full h-full container dark:bg-dark-primary-1 dark:text-dark-font">
      <div>
        <Header/>
      </div>
      <div className="grid gap-[30px] grid-cols-[230px_1fr_230px] w-full h-full">
        <div>
          <Aside/>
        </div>
        <div>
          {children}
        </div>
        <div>
          test
        </div>
      </div>
    </div>
  );
};
