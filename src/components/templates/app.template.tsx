import { Header } from "@components/organisms";
import React, { FC, HTMLAttributes } from "react";

export const AppTemplate: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="fixed flex flex-col w-full h-full container dark:bg-dark-primary-1 dark:text-dark-font">
      <div>
        <Header/>
      </div>
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  );
};
