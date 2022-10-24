import { Aside, Header } from "@components/organisms";
import React, { FC, HTMLAttributes } from "react";
import user from "@assets/svg/avatar/user.svg";
import { useAppTemplateState } from "./app.state";

export const AppTemplate: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {

  const { menu } = useAppTemplateState()

  return (
    <div className="fixed flex flex-col w-full h-full container dark:bg-dark-primary-1 dark:text-dark-font">
      <div>
        <Header/>
      </div>
      <div className="grid gap-[30px] grid-cols-[270px_1fr_270px] w-full h-full">
        <div>
          <Aside avatar={user} menu={menu}/>
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
