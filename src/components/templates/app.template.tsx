import { Aside, Header } from "@components/organisms";
import React, { FC, HTMLAttributes } from "react";
import user from "@assets/svg/avatar/user.svg";
import logo from "@assets/logo.svg";
import Image from "next/image";
import { useAppTemplateState } from "./app.state";
import { GroupCard } from "@components/organisms/card";
import Head from "next/head";

export const AppTemplate: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const { menu, friends, communities } = useAppTemplateState();

  return (
    <>
      <Head>
        <title>Orkut | Redesign</title>
      </Head>
      <div className="fixed sm:hidden xl:flex flex flex-col w-full h-full bg-light-primary-1 dark:bg-dark-primary-1 dark:text-dark-font">
        <div className="flex flex-col container">
          <div className="flex items-center w-full">
            <div className="w-full">
              <Header />
            </div>
          </div>
          <div className="flex items-center">
            <div className="grid gap-[30px] grid-cols-[270px_1fr_270px] w-full">
              <div className="relative overflow-y-auto pb-[150px] h-[100vh]">
                <Aside avatar={user} menu={menu} />
              </div>
              <div className="relative overflow-y-auto pb-[150px] h-[100vh]">
                {children}
              </div>
              <div className="relative overflow-y-auto pb-[150px] h-[100vh]">
                <div className="grid grid-rows-2 gap-[30px]">
                  <div>
                    <GroupCard title="Amigos" length={51} data={friends} />
                  </div>
                  <div>
                    <GroupCard
                      title="Comunidades"
                      length={313}
                      data={communities}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col fixed w-full h-full sm:flex xl:hidden bg-light-primary-1 dark:bg-dark-primary-1 dark:text-dark-font">
        <div>
          <Image src={logo} alt="orkut-logo" />
        </div>
        <div>- No screen incompatible -</div>
      </div>
    </>
  );
};
