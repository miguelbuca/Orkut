import { MenuType } from "@components/organisms";

/**
 * icons
 */
import home from "@assets/svg/home.svg";
import user from "@assets/svg/user.svg";
import heart from "@assets/svg/heart.svg";
import image from "@assets/svg/image.svg";
import game from "@assets/svg/game.svg";
import { GroupItemType } from "@components/organisms/card";

/**
 * static avatars
 */

import alexiaDoe from "@assets/svg/avatar/alexia-doe.svg";
import gabiRosa from "@assets/svg/avatar/gabi-rosa.svg";
import hillaryJack from "@assets/svg/avatar/hillary-jack.svg";
import pietroLan from "@assets/svg/avatar/pietro-lan.svg";
import luaFox from "@assets/svg/avatar/lua-fox.svg";
import alexHarry from "@assets/svg/avatar/alex-harry.svg";
import alexiaDoe1 from "@assets/svg/avatar/alexia-doe-1.svg";
import maxHook from "@assets/svg/avatar/max-hook.svg";

import AmigosDaO from "@assets/svg/avatar/amigos-da-o.svg";
import OdeioAcO from "@assets/svg/avatar/odeio-ac-o.svg";
import SimpsonsBR from "@assets/svg/avatar/simpsons-br.svg";
import SantistasDe from "@assets/svg/avatar/santistas-de.svg";
import TitioElon from "@assets/svg/avatar/titio-elon.svg";
import Ilove70s from "@assets/svg/avatar/i-love-70s.svg";
import Praia from "@assets/svg/avatar/praia.svg";
import Drink from "@assets/svg/avatar/drink.svg";

export const useAppTemplateState = () => {
  const menu: MenuType = [
    {
      title: "Início",
      imageURL: home,
    },
    {
      title: "Adicionar",
      imageURL: user,
      count: 114,
    },
    {
      title: "Depoimentos",
      imageURL: heart,
      count: 1,
    },
    {
      title: "Galeria",
      imageURL: image,
    },
    {
      title: "Jogos",
      imageURL: game,
    },
  ];
  const friends: GroupItemType[] = [
    {
      name: "Alexia Doe",
      img: alexiaDoe,
    },
    {
      name: "Gabi Rosa",
      img: gabiRosa,
    },
    {
      name: "Hillary Jack",
      img: hillaryJack,
    },
    {
      name: "Pietro Lan",
      img: pietroLan,
    },
    {
      name: "Lua Fox",
      img: luaFox,
      useSelo: true,
    },
    {
      name: "Alex Harry",
      img: alexHarry,
    },
    {
      name: "Alexia Doe",
      img: alexiaDoe1,
    },
    {
      name: "Max Hook",
      img: maxHook,
    },
  ];

  const communities: GroupItemType[] = [
    {
      name: "Amigos da o...",
      img: AmigosDaO,
    },
    {
      name: "Odeio aco...",
      img: OdeioAcO,
    },
    {
      name: "Simpsons BR",
      img: SimpsonsBR,
    },
    {
      name: "Santistas de...",
      img: SantistasDe,
    },
    {
      name: "Titio Elon",
      img: TitioElon,
    },
    {
      name: "i love 70's",
      img: Ilove70s,
    },
    {
      name: "Praia",
      img: Praia,
    },
    {
      name: "Drink",
      img: Drink,
    },
  ];

  return {
    menu,
    friends,
    communities,
  };
};
