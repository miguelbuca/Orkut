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

  return {
    menu,
    friends,
  };
};
