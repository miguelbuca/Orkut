import { CheckGroup } from "@components/molecules";
import type { NextPage } from "next";
import { useBioState } from "./bio.state";
import Image from "next/image";

/**
 * static svg
 */

import heart1 from "@assets/svg/heart-1.svg";
import heart2 from "@assets/svg/heart-2.svg";
import star from "@assets/svg/star.svg";
import smile from "@assets/svg/smile.svg";
import smile1 from "@assets/svg/smile-1.svg";

export const BioCard: NextPage = () => {
  const { seeMore, screenSize, handlerSeeMore } = useBioState();

  return (
    <div
      className={`relative flex flex-col w-full border dark:border-transparent bg-white overflow-hidden rounded-[30px] dark:bg-dark-primary-2 p-[40px] ${screenSize}`}
    >
      <div className="flex flex-col border-b dark:border-b-dark-primary-5">
        <div>
          <strong>Bio</strong>
        </div>
        <div className="grid grid-cols-5 gap-[10px] my-[30px] child:flex child:flex-col">
          <div>
            <div className="text-[12pt] text-dark-primary-4">
              <small>depoimentos</small>
            </div>
            <div className="flex flex-row items-center mt-[9px]">
              <div className="mr-[6px]">
                <Image height={20} width={20} src={heart1} alt="heart-icon" />
              </div>
              <small>114</small>
            </div>
          </div>
          <div>
            <div className="text-[12pt] text-dark-primary-4">
              <small>fãs</small>
            </div>
            <div className="flex flex-row items-center mt-[9px]">
              <div className="mr-[6px]">
                <Image height={20} width={20} src={star} alt="heart-icon" />
              </div>
              <small>15</small>
            </div>
          </div>
          <div>
            <div className="text-[12pt] text-dark-primary-4">
              <small>confiável</small>
            </div>
            <div className="mr-[6px] mt-[9px] child:mr-[2px]">
              <span>
                <Image height={20} width={20} src={smile} alt="smile-icon" />
              </span>
              <span>
                <Image height={20} width={20} src={smile} alt="smile-icon" />
              </span>
              <span>
                <Image height={20} width={20} src={smile1} alt="smile1-icon" />
              </span>
            </div>
          </div>
          <div>
            <div className="text-[12pt] text-dark-primary-4">
              <small>legal</small>
            </div>
            <div className="mr-[6px] mt-[9px] child:mr-[2px]">
              <span>
                <Image height={20} width={20} src={heart2} alt="heart2-icon" />
              </span>
              <span>
                <Image height={20} width={20} src={heart2} alt="heart2-icon" />
              </span>
              <span>
                <Image height={20} width={20} src={heart2} alt="heart2-icon" />
              </span>
            </div>
          </div>
          <div>
            <div className="text-[12pt] text-dark-primary-4">
              <small>sexy</small>
            </div>
            <div className="mr-[6px] mt-[9px] child:mr-[2px]">
              <span>
                <Image height={20} width={20} src={heart1} alt="heart1-icon" />
              </span>
              <span>
                <Image height={20} width={20} src={heart1} alt="heart1-icon" />
              </span>
              <span>
                <Image height={20} width={20} src={heart1} alt="heart1-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-[30px] gap-[10px]">
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            sobre mim:
          </small>
          <small>
            Você sentirá vergonha de mim, mas nunca estará entediado com o meu
            feed;
          </small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">idade:</small>
          <small>20 anos</small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            orientação:
          </small>
          <small>Heterosexual</small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            relacionamento:
          </small>
          <small>Solteiro(a)</small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            cidade:
          </small>
          <small>Santos - SP</small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            interesses:
          </small>
          <small>
            <CheckGroup />
          </small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            estilo:
          </small>
          <small>Urbano</small>
        </div>
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 gap-[40px]">
          <small className="text-[12pt] text-dark-primary-4">
            website:
          </small>
          <small>www.janedoe.com</small>
        </div>
      </div>
      {seeMore && (
        <div className="absolute bio-gradient-2 dark:bio-gradient-1 bottom-0 left-0 rounded-b-[30px] h-[79px] w-full flex items-end p-[30px] justify-center">
          <small
            onClick={handlerSeeMore}
            className="cursor-pointer text-dark-secondary-2"
          >
            Ver mais
          </small>
        </div>
      )}
    </div>
  );
};
